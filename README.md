# Bulma Theme for Pelican

A minimal, responsive theme for Pelican built with Bulma CSS framework.

![Screenshot](docs/screenshot.png)

## Features

- Responsive design with Bulma CSS
- Dark mode support
- SEO optimized with structured data
- Clean, minimalist layout

## Installation

```bash
git clone https://github.com/saphyel/pelican-bulma.git
```

Add to your `pelicanconf.py`:

```python
THEME = 'path/to/pelican-bulma'
```

## Configuration

Optional settings for `pelicanconf.py`:

```python
# Social links in footer
SOCIAL = (
    ('GitHub', 'https://github.com/yourusername'),
    ('Twitter', 'https://twitter.com/yourusername'),
)

# Custom menu items
MENUITEMS = (
    ('About', '/pages/about.html'),
)
```