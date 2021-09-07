# rails_react_sandbox

A small demonstration of running a React app backed by a plain JSON REST API, within Rails with Webpacker.

Uses:

- Postgres for the database
- [Webpacker](https://edgeguides.rubyonrails.org/webpacker.html) to serve the React app
- [RSpec-Rails](https://github.com/rspec/rspec-rails) for testing
- [Capybara](https://github.com/teamcapybara/capybara) for simulating user interaction
- Chromedriver for running tests in headless Chrome
- [factory_bot](https://github.com/thoughtbot/factory_bot/blob/master/GETTING_STARTED.md) for creating model records in tests
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to test React components

## Requirements

- Ruby 3.0.2
- Postgres. On macOS, [Postgres.app](https://postgresapp.com/) is recommended.
- [Node](https://nodejs.org/en/)
- [Yarn 1.x](https://classic.yarnpkg.com/lang/en/)
- [Chromedriver](https://formulae.brew.sh/cask/chromedriver)
- A process manager. [Overmind](https://github.com/DarthSim/overmind) is recommended.

## Running

```bash
$ bin/serve
```

This will run both Rails and `webpack-dev-server` to automatically rebuild JS assets and reload the page.

Go to `http://localhost:5000`

## Tests

API and system tests:

```bash
$ bin/rspec
```

JS tests:

```bash
$ yarn test
```
