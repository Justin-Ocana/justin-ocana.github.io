# Justin Ocaña - Backend Developer Portfolio

[![Live Site](https://img.shields.io/badge/Live-justin--ocana.github.io-0891b2?style=for-the-badge)](https://justin-ocana.github.io/)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-5.x-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

Professional portfolio showcasing production-ready systems built with Django, PostgreSQL, and modern backend architecture.

## Overview

This portfolio demonstrates real-world backend development experience through three production systems:

### Featured Projects

| Project | Description | Status | Tech Stack |
|---------|-------------|--------|------------|
| **[Agenda Virtual EIWA](https://justin-ocana.github.io/pages/agenda-virtual.html)** | Multi-user academic platform with role-based permissions | ✅ Production | Django, PostgreSQL, REST API |
| **[Plugsite](https://justin-ocana.github.io/pages/plugsite.html)** | Multi-tenant SaaS for Minecraft server stores | 🚧 87% Complete | Django, MongoDB, PayPal |
| **[SouthernPOS](https://justin-ocana.github.io/pages/southernpos.html)** | Cloud-based point-of-sale system | 🚧 MVP+ Stage | Django, PostgreSQL, ReportLab |

## Technical Stack

### Backend
- Django 5.x
- Python 3.11+
- Django REST Framework
- PostgreSQL / MongoDB

### Frontend
- Vanilla JavaScript
- Custom CSS architecture
- Responsive design
- Dark/light theme system

### Infrastructure
- Render.com hosting
- Neon DB (PostgreSQL)
- Cloudinary (media storage)
- WhiteNoise (static files)

## Project Structure

```
portfolio/
├── index.html                      # Main landing page
├── pages/                          # Project detail pages
│   ├── agenda-virtual.html
│   ├── plugsite.html
│   └── southernpos.html
├── static/
│   ├── css/
│   │   ├── styles.css             # Core styles
│   │   ├── project-page.css       # Project page styles
│   │   ├── project-colors.css     # Color system
│   │   ├── plugsite-theme.css     # Project-specific theme
│   │   └── southernpos-theme.css  # Project-specific theme
│   ├── js/
│   │   ├── main.js                # Core functionality
│   │   ├── translations.js        # i18n system
│   │   ├── project-page.js        # Project page logic
│   │   └── *-translations.js      # Project translations
│   └── images/
│       ├── favicon.svg
│       └── *.png                  # Project screenshots
└── README.md
```

## Features

### Core Functionality
- Bilingual support (English/Spanish)
- Theme persistence (localStorage)
- Responsive navigation
- Smooth scroll behavior
- Project filtering

### Architecture Documentation
Each project page includes:
- Problem statement and business context
- Technical architecture overview
- System design decisions
- Technology trade-offs
- Current limitations

## Local Development

```bash
# Clone repository
git clone https://github.com/justin-ocana/justin-ocana.github.io.git
cd justin-ocana.github.io

# Serve locally
python -m http.server 8000

# Visit
http://localhost:8000
```

## Deployment

Optimized for static hosting platforms:
- GitHub Pages
- Netlify
- Vercel
- Render

## Design System

### Color Palette
- Primary accent: #0891b2 (cyan-600)
- Secondary accent: #06b6d4 (cyan-500)
- Neutral scale: #0d0d0d to #ffffff

### Typography
- Primary: Inter (sans-serif)
- Monospace: JetBrains Mono

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 968px
- Desktop: > 968px

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Screenshots

### Agenda Virtual EIWA
![Agenda Virtual EIWA](static/images/agenda_virtual.png)

### Plugsite
![Plugsite Platform](static/images/plugsite.png)

### SouthernPOS
![SouthernPOS System](static/images/southernpos.png)

## Contact

- **Email**: justin.ocana.molina@gmail.com
- **GitHub**: [@justin-ocana](https://github.com/justin-ocana)
- **Portfolio**: [justin-ocana.github.io](https://justin-ocana.github.io/)
- **Location**: Milagro, Ecuador

## License

MIT License - Free to use and modify.

---

Built with focus on system architecture and real-world problem solving.
