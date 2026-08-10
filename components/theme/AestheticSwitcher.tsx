"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { aesthetics, type AestheticId } from "@/lib/aesthetics";
import { useAesthetic } from "@/components/theme/AestheticProvider";
import { useI18n } from "@/lib/i18n";

const ids = Object.keys(aesthetics) as AestheticId[];

export function AestheticSwitcher() {
  const { aesthetic, setAesthetic } = useAesthetic();
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const chooseLabel = t("themesAria");

  const close = useCallback(() => setOpen(false), []);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let cancelled = false;

    const measure = () => {
      if (cancelled || !rootRef.current) return;
      const el = rootRef.current;

      const probeTrigger = document.createElement("button");
      probeTrigger.type = "button";
      probeTrigger.className = "aesthetic-switcher__trigger";
      probeTrigger.setAttribute("aria-hidden", "true");
      probeTrigger.tabIndex = -1;
      probeTrigger.innerHTML =
        `<span class="aesthetic-switcher__label"></span>` +
        `<span class="aesthetic-switcher__chevron" aria-hidden="true">▾</span>`;
      const probeLabel = probeTrigger.querySelector(".aesthetic-switcher__label");
      if (probeLabel) probeLabel.textContent = t("themesLabel");

      const probeMenu = document.createElement("ul");
      probeMenu.className = "aesthetic-switcher__menu";
      probeMenu.setAttribute("aria-hidden", "true");
      for (const id of ids) {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "aesthetic-switcher__option";
        btn.textContent =
          lang === "es" ? aesthetics[id].labelEs : aesthetics[id].label;
        li.appendChild(btn);
        probeMenu.appendChild(li);
      }

      const stage = document.createElement("div");
      stage.className = "aesthetic-switcher__probe";
      stage.append(probeTrigger, probeMenu);
      el.appendChild(stage);

      const closed = Math.ceil(probeTrigger.getBoundingClientRect().width) + 2;
      const openWidth = Math.ceil(
        Math.max(closed, probeMenu.getBoundingClientRect().width),
      );

      el.style.setProperty("--as-w-closed", `${closed}px`);
      el.style.setProperty("--as-w-open", `${openWidth}px`);
      stage.remove();
    };

    measure();
    void document.fonts?.ready.then(measure);

    return () => {
      cancelled = true;
    };
  }, [lang, t]);

  useEffect(() => {
    if (!open) return;

    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) close();
    };
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const pick = (id: AestheticId) => {
    setAesthetic(id);
    close();
  };

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen(true);
    }
  };

  const onListKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const options = Array.from(
      event.currentTarget.querySelectorAll<HTMLButtonElement>("[role='option']"),
    );
    const index = options.indexOf(document.activeElement as HTMLButtonElement);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      options[(index + 1) % options.length]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      options[(index - 1 + options.length) % options.length]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      options[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      options[options.length - 1]?.focus();
    } else if (event.key === "Escape") {
      event.preventDefault();
      close();
    }
  };

  useEffect(() => {
    if (!open) return;
    const selected = rootRef.current?.querySelector<HTMLButtonElement>(
      "[role='option'][aria-selected='true']",
    );
    selected?.focus();
  }, [open]);

  return (
    <div
      className={`aesthetic-switcher${open ? " is-open" : ""}`}
      ref={rootRef}
    >
      <span className="sr-only">{t("themesLabel")}</span>
      <button
        type="button"
        className="aesthetic-switcher__trigger"
        aria-label={chooseLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={onTriggerKeyDown}
      >
        <span className="aesthetic-switcher__label">{t("themesLabel")}</span>
        <span className="aesthetic-switcher__chevron" aria-hidden>
          ▾
        </span>
      </button>

      {open ? (
        <ul
          id={listId}
          className="aesthetic-switcher__menu"
          role="listbox"
          aria-label={chooseLabel}
          onKeyDown={onListKeyDown}
        >
          {ids.map((id) => {
            const selected = id === aesthetic;
            const text =
              lang === "es" ? aesthetics[id].labelEs : aesthetics[id].label;
            return (
              <li key={id} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`aesthetic-switcher__option${selected ? " is-selected" : ""}`}
                  onClick={() => pick(id)}
                >
                  {text}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
