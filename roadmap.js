let roadmapData = null;

function getLang() {
  return document.documentElement.lang === "es" ? "es" : "en";
}

function t(key) {
  const dict = window.__roadmapStrings?.[getLang()] || window.__roadmapStrings?.en;
  return dict?.[key] || "";
}

function phaseLabel(phase) {
  return getLang() === "es" ? phase.labelEs || phase.label : phase.label;
}

function taskLabel(task) {
  return getLang() === "es" ? task.labelEs || task.label : task.label;
}

function formatCompletedDate(isoDate) {
  if (!isoDate) return "";
  const date = new Date(`${isoDate}T12:00:00`);
  const locale = getLang() === "es" ? "es-AR" : "en-US";
  return date.toLocaleDateString(locale, { month: "short", year: "numeric" });
}

function phaseStatusText(phase) {
  if (phase.status === "done") {
    const when = formatCompletedDate(phase.completedDate);
    return when ? `${t("statusDone")} ${when}` : t("statusDone");
  }
  return t("statusInProgress");
}

function renderTask(task) {
  const label = taskLabel(task);
  const isDone = task.status === "done";
  const className = `roadmap-task${isDone ? " roadmap-task--done" : " roadmap-task--pending"}`;
  const repo = task.repo ? `<span class="roadmap-repo">${task.repo}</span>` : "";

  if (isDone && task.proofUrl) {
    return `<li class="${className}"><span class="roadmap-task__content">${repo}<a href="${task.proofUrl}" target="_blank" rel="noopener noreferrer" aria-label="${t("proofAria")}: ${label}">${label}</a></span></li>`;
  }

  return `<li class="${className}"><span class="roadmap-task__content">${repo}<span class="roadmap-task__label">${label}</span></span></li>`;
}

function renderTasks(tasks) {
  if (!tasks?.length) return "";
  return `<ul class="roadmap-tasks">${tasks.map(renderTask).join("")}</ul>`;
}

function groupLabel(group) {
  return getLang() === "es" ? group.labelEs || group.label : group.label;
}

function renderGroup(group) {
  return `<div class="roadmap-group"><h4 class="roadmap-group__title">${groupLabel(group)}</h4>${renderTasks(group.tasks)}</div>`;
}

function renderPhaseBody(phase) {
  if (phase.groups?.length) {
    return `<div class="roadmap-groups">${phase.groups.map(renderGroup).join("")}</div>`;
  }
  return renderTasks(phase.tasks);
}

function renderPhase(phase) {
  const bodyHtml = renderPhaseBody(phase);
  const statusClass = phase.status === "done" ? "roadmap-phase__status--done" : "roadmap-phase__status--active";
  const statusText = phaseStatusText(phase);

  if (phase.collapsed) {
    return `<details class="roadmap-phase roadmap-phase--collapsible"><summary class="roadmap-phase__summary"><span class="roadmap-phase__title">${phaseLabel(phase)}</span><span class="roadmap-phase__status ${statusClass}">${statusText}</span></summary>${bodyHtml}</details>`;
  }

  return `<article class="roadmap-phase"><div class="roadmap-phase__header"><h3 class="roadmap-phase__title">${phaseLabel(phase)}</h3><span class="roadmap-phase__status ${statusClass}">${statusText}</span></div>${bodyHtml}</article>`;
}

function renderRoadmap() {
  const container = document.getElementById("roadmap-content");
  if (!container || !roadmapData) return;
  container.innerHTML = roadmapData.phases.map(renderPhase).join("");
}

async function initRoadmap() {
  const container = document.getElementById("roadmap-content");
  if (!container) return;

  try {
    const response = await fetch("roadmap.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    roadmapData = await response.json();
    window.renderRoadmap = renderRoadmap;
    renderRoadmap();
  } catch {
    container.innerHTML = `<p class="roadmap-fallback">${t("loadError")}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", initRoadmap);
