# TODO: Compact cards -> expand on hover

Goal: Default compact (2-3 text lines, no buttons), hover full expand.

Plan:
- [ ] 1. CSS: Truncate .problem/.stack/.outcome/.impact ps to 2-3 lines (line-clamp), hide .card-details/.project-links
- [ ] 2. Hover: Full text (no clamp), show details/buttons, card height growth
- [ ] 3. Test compact/expand cycle

**COMPACT/EXPAND COMPLETE** - Default: 2-line text clamp, outcome/impact/tags hidden in .card__extended, buttons hidden. Hover: Full text reveal, extended content slides in, card grows to 680px height, buttons appear. Noticeable transformation.

Demo: start "d:/VS Code/portfolio/index.html"

TASKS FINISHED

