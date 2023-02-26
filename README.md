# Introduction

I've used Vue 3 in Vite with TypeScript and Tailwind CSS.

## Configuration

Before you start, you need to set the `BASE_URL` in `src/utils/constants.ts`.

## Project Setup

Clone the repository and install the dependencies:

```sh
npm install
```

Compile and Hot-Reload for Development:

```sh
npm run dev
```

## Run tests

Unit Tests

```sh
npm run test:unit
```

End-to-End Tests with Cypress, you have to change the `baseUrl` in `cypress.config.ts` to the URL of your Vite development server.

```sh
npm run test:e2e:dev
```

## Lint and Format

I'm using ESLint and Prettier for linting and formatting and I'm using Husky to run the linter and formatter before each commit.

You need to run the following command to install the `pre-commit` hook:

```sh
npm run execute-husky
```

### Lint with ESLint

```sh
npm run lint
```

### Format with Prettier

```sh
npm run format
```
