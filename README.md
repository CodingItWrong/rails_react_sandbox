# rails_react_sandbox

A small demonstration of running a React app backed by a plain JSON REST API, within Rails with Webpacker.

## Requirements

- Ruby 3.0.2
- Postgres
- Node
- Yarn
- Chromedriver: `brew install --cask chromedriver`
- A process runner. Overmind is recommended

## Running

```bash
$ bin/serve
```

This will run both Rails and `webpack-dev-server` to automatically rebuild JS assets and reload the page.

Go to `http://localhost:5000`

## Tests

```bash
$ bin/rspec
```
