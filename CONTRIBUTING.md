# Contributing to Pelican-Bulma

Thank you for your interest in contributing to Pelican-Bulma! 🎉

## How to Contribute

### Reporting Issues

Before creating an issue, please check if it already exists in the [issue tracker](https://github.com/saphyel/pelican-bulma/issues).

When reporting issues, please include:
- Pelican version
- Theme version
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

### Suggesting Features

Feature requests are welcome! Please:
- Check existing issues first
- Describe the feature clearly
- Explain why it would be useful
- Consider if it fits the theme's minimalist philosophy

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/saphyel/pelican-bulma.git
   cd pelican-bulma
   ```

3. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Test your changes:
   ```bash
   pelican example/content -s example/pelicanconf.py -o example/output
   pelican --listen -s example/pelicanconf.py -o example/output
   ```

### Code Standards

- Follow Jinja2 template best practices
- Use semantic HTML5 elements
- Maintain responsive design principles
- Keep accessibility in mind (ARIA labels, semantic markup)
- Test on multiple browsers
- Ensure SEO optimization remains intact

### Pull Request Process

1. Update documentation if needed
2. Add/update tests if applicable
3. Update CHANGELOG.md
4. Ensure all templates validate
5. Test with example content
6. Submit pull request with clear description

### Style Guidelines

- Use 4 spaces for indentation
- Keep lines under 120 characters
- Use descriptive variable names
- Comment complex logic
- Follow Bulma CSS conventions

## Theme Philosophy

Pelican-Bulma aims to be:
- **Minimalist**: Clean, distraction-free design
- **Fast**: Minimal dependencies, optimized loading
- **Accessible**: Usable by everyone
- **SEO-friendly**: Optimized for search engines
- **Developer-friendly**: Easy to customize and extend

## Community

- Discussions: Use GitHub Discussions for questions
- Issues: Bug reports and feature requests
- Security: Report security issues privately

## Recognition

Contributors will be acknowledged in:
- README.md contributors section
- Release notes
- Special thanks for major contributions

Thank you for helping make Pelican-Bulma better! 🚀
