# Unslop source and setup

Unslop by **Damir Sokolovsky (@heydamir)**: <https://github.com/heydamir/unslop>.

- Source revision: `97daa3eb365670ea3f87ed85356cbfcee18105a5`.
- Installed on 2026-11-11 from `skills/unslop` with the Codex skill installer, following the upstream README's project-local installation option.
- The upstream skill files are unchanged. This record and a copy of the upstream repository's license are added for provenance.
- License: [Creative Commons Attribution 4.0 International](LICENSE).

`AGENTS.md` makes this skill a standing instruction for this repository. Playwright is a project development dependency. After `npm ci` on a new machine, run `npx playwright install chromium` to enable browser snapshots. Story videos additionally require `ffmpeg` on `PATH`; install it when video output is needed.

Keep generated snapshots and videos outside versioned source, such as in a temporary directory. Review the upstream README and skill changes before updating the pinned installation.
