# Introduction

I've used Vue 3 in Vite with TypeScript and Tailwind CSS. Also, I've used Cypress for E2E testing and Vitest for unit testing.

- There are two views, `Chat` and `Login`. The `Chat` view is the main component and it's responsible for fetching the messages and sending the new messages and logout. The `Login` view is responsible for the login.
- Inside the `Chat` view, there are three components, `ChatHeader`, `MessageList`, `ChatMessageInput`. The `ChatHeader` is responsible for showing the company logo and the logout button. The `MessageList` is responsible for showing the messages and the `ChatMessageInput` is responsible for sending the new messages.
- I've created two composables to extract the logic from the components, `useBot` and `useUser`.
- I've created a `botService.ts` file for the API calls.

## Design

I've used the company's colors and logo to create a simple design and Tailwind CSS to create the components.

Also added a simple animation to the messages and a loading message when the messages are being fetched.

## Deployment to GitHub Pages for demo purposes

I've created a `fake-backend` branch to fake the API so you can see it deployed on [gh-pages](https://bymykel.github.io/friendly-invention/), but is preferable to test this from `main` branch.

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

End-to-End Tests with Cypress, you have to change the `baseUrl` in `cypress.config.ts` to the URL of your development server.

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
