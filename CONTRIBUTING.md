# Shrike S.I.S. Contributing Guide

Hi! I’m really excited that you are interested in contributing to S.I.S.!
Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

## Pull Request Guidelines

- Checkout a topic branch from `dev` and merge back against `dev`.

- Work in the `src` folder and **DO NOT** checkin `dist` in the commits.

- Squash the commit if there are too many small ones.

- Follow the [code style](#code-style).

- Make sure `npm test` passes. (see [development setup](#development-setup))

- If adding new feature:
    - Add accompanying test case(s).

- If fixing a bug:
    - Provide detailed description of the bug in the PR. Live demo preferred.
    - Add appropriate test coverage if applicable.

## Code Style

- Follow the [Airbnb Style Guide](https://github.com/airbnb/javascript).

## Development Setup

To setup:

You will need [Node.js](http://nodejs.org).

``` bash
$ npm install
```

To build:

``` bash
$ npm run build
```

To test:

``` bash
$ npm test
```

Tests must pass for PR to be considered.

The unit tests are written with Tape.

<!-- The e2e tests are run on headless Chrome. ==>
