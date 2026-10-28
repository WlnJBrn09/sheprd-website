# Sheprd website

Marketing site for [sheprd.xyz](https://sheprd.xyz).

The landing page, branding, and workspace screenshot live at the root. Installer software is served from the same host:

- [install.sh](https://sheprd.xyz/install.sh) — Linux and macOS
- [install.ps1](https://sheprd.xyz/install.ps1) — Windows PowerShell
- [install.cmd](https://sheprd.xyz/install.cmd) — Windows Command Prompt bootstrap
- [latest.json](https://sheprd.xyz/latest.json) — stable release manifest
- [preview.json](https://sheprd.xyz/preview.json) — preview channel manifest

These installer files match `distribution/` in [WlnJBrn09/Sheprd](https://github.com/WlnJBrn09/Sheprd), with download URLs pointed at sheprd.xyz.

No build step or dependencies are required.

For Vercel: framework Other, empty build command, files at the repository root.
