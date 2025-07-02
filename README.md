# Bulma Theme for Pelican

A clean, minimal, and SEO-friendly theme for Pelican static site generator built with Bulma CSS framework.

## Features

- **Minimalist Design**: Clean and distraction-free layout
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Responsive**: Mobile-first design that works on all devices
- **Fast Loading**: Optimized CSS and JavaScript with CDN delivery
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Dark Mode**: Automatic dark mode support based on system preferences
- **Social Media Ready**: Open Graph and Twitter Card meta tags

## Installation

1. Clone or download this theme to your Pelican themes directory:
```bash
git clone https://github.com/saphyel/pelican-bulma.git
```

2. In your `pelicanconf.py`, set the theme path:
```python
THEME = 'path/to/pelican-bulma'
```

## Configuration

### Required Settings

Add these settings to your `pelicanconf.py`:

```python
# Basic site information
SITENAME = 'Your Site Name'
SITEDESCRIPTION = 'A brief description of your site'
AUTHOR = 'Your Name'
AUTHOR_EMAIL = 'your.email@example.com'  # Optional

# Theme settings
THEME = 'path/to/pelican-bulma'
THEME_STATIC_DIR = 'theme'

# Display settings
DISPLAY_PAGES_ON_MENU = True
DEFAULT_PAGINATION = 6

# Feed settings (recommended for SEO)
FEED_ALL_ATOM = 'feeds/all.atom.xml'
FEED_ALL_RSS = 'feeds/all.rss.xml'
```

### Optional Settings

```python
# Social media links (displayed in footer)
SOCIAL = (
    ('Twitter', 'https://twitter.com/yourusername'),
    ('GitHub', 'https://github.com/yourusername'),
    ('LinkedIn', 'https://linkedin.com/in/yourusername'),
)

# Custom menu items
MENUITEMS = (
    ('About', '/pages/about.html'),
    ('Contact', '/pages/contact.html'),
)

# SEO and performance
SITEDESCRIPTION = 'Your site description for meta tags'
SITE_KEYWORDS = 'pelican, blog, python, web development'
```

## File Structure

```
pelican-bulma/
├── templates/
│   ├── base.html          # Base template with navigation and footer
│   ├── index.html         # Homepage with article listings
│   └── page.html          # Static pages template
├── static/
│   ├── css/
│   │   └── style.css      # Custom styles and theme overrides
│   └── js/
│       └── main.js        # Theme JavaScript functionality
├── README.md
└── screenshot.png         # Theme preview (add this)
```

## Customization

### Colors an