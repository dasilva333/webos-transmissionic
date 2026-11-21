# Transmissionic for LG webOS

A modern, fast, and responsive Transmission BitTorrent remote client packaged for LG webOS TVs.

Ported from [Transmissionic](https://github.com/6c65726f79/Transmissionic) by [@6c65726f79](https://github.com/6c65726f79).

## Features

- **Full Transmission Daemon Control**: Monitor active transfers, view upload/download speeds, pause/resume, add torrents/magnets, and manage queue priorities.
- **webOS 5+ Compatibility**: Transpiled specifically for Chromium 68 compatibility, eliminating ES2020 syntax crashes on webOS 5 (OLED CX) and newer models.
- **TV Remote Navigation**: Native webOS Back key (`461`) handling for modals and navigation drawers, plus full LG Magic Remote air-mouse support.
- **Multi-Server Management**: Pre-configured server profiles with in-app UI to add, switch, or customize Transmission daemon endpoints, ports, SSL, and credentials.
- **Dark Mode UI**: Clean, OLED-friendly interface designed with Ionic Vue.

## Installation

Download the latest `.ipk` from GitHub Releases or install directly through the webOS Homebrew Channel repository (`repo.webosbrew.org`).

## Building

```bash
# Requires Node.js and webOS CLI (ares-package)
bash scripts/build.sh
```

## Credits

- Original Transmissionic application: [6c65726f79/Transmissionic](https://github.com/6c65726f79/Transmissionic) (GPL-3.0)
- webOS packaging & Chromium 68 transpilation by [dasilva333](https://github.com/dasilva333)

## License

GPL-3.0 License - see upstream repository.
