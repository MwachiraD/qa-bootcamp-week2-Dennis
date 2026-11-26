# QA Bootcamp – Week 2

## Overview

This repository contains my Week 2 QA Bootcamp exercises, focusing on TypeScript, Playwright, UI automation, API testing, and test organisation.

The exercises use the [Practice Software Testing](https://practicesoftwaretesting.com/) application and its API.

## Prerequisites

- Node.js (LTS)
- Git
- Visual Studio Code or another code editor

## Getting the project

Clone the repository and enter the project directory:

```bash
git clone <repository-url>
cd <repository-folder>
```

## Setup

Complete these three steps from the project directory:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install Playwright Chromium:

   ```bash
   npx playwright install chromium
   ```

3. Create your environment file by copying `.env.example` to `.env`.

   **Windows PowerShell:**
   ```powershell
   Copy-Item .env.example .env
   ```

   **macOS/Linux:**
   ```bash
   cp .env.example .env
   ```

Do not commit your `.env` file. It is excluded through `.gitignore`.

## Running the project

Run the project checks:

```bash
npm run check
```

Run the Playwright test suite:

```bash
npm test
```

Run a specific test file:

```bash
npx playwright test tests/search.spec.ts
```

Open the HTML report:

```bash
npx playwright show-report
```

Open a recorded trace:

```bash
npx playwright show-trace path/to/trace.zip
```

## Project structure

```text
.
├── pages/
│   └── SearchPage.ts
├── scripts/
│   └── check.ts
├── tests/
│   ├── api_search.spec.ts
│   ├── cart-api.spec.ts
│   ├── home.spec.ts
│   ├── invalid_login.spec.ts
│   ├── search.spec.ts
│   └── search_ui_pom.spec.ts
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

## Test coverage

The test suite contains UI and API test cases.

### UI tests

- Verify the homepage title.
- Search for pliers and check the displayed results.
- Verify invalid login behaviour.
- Use a Page Object Model (POM) to organise search-page interactions.

### API tests

- Retrieve products and verify the response.
- Create a cart and add a product.
- Verify the response when requesting a nonexistent cart.

Some API-dependent tests may be affected by availability or configuration issues on the external training API. These failures should be investigated and reported rather than hidden by weakening the assertions.

## Week 2 learning progress

### Day 6 – TypeScript fundamentals

- Practised TypeScript fundamentals.
- Worked with types and basic validation.
- Built a Profile Validator exercise.

### Day 7 – Playwright UI testing

- Created UI tests using Playwright.
- Practised locating elements and interacting with the application.
- Added tests covering the homepage, product search, and invalid login.

### Day 8 – Page Object Model and API testing

- Introduced the Page Object Model to separate page interactions from test logic.
- Created a `SearchPage` class to organise search-page locators and actions.
- Used the Playwright API request fixture to retrieve products.
- Asserted the response status and product data.

### Day 9 – API testing, Trace Viewer, and test suites

- Created cart API tests covering cart creation, adding a product, and handling a nonexistent cart.
- Used `try/finally` to ensure that a created cart is cleaned up after the test.
- Used Playwright Trace Viewer to inspect a deliberately failing test.
- Distinguished a test assertion problem from an application or environment problem.
- Ran the test suite and investigated failures.
- Reported the external API availability issue to the trainer.

## API availability note

During Day 9 testing, requests to the training cart API returned generic Apache error responses instead of the expected API responses.

The products endpoint also returned an Apache access error in the browser. Trace Viewer inspection showed a failed/cancelled products request during the UI search exercise.

These observations were reported to the trainer for investigation. The expected API assertions have been retained rather than changed to accommodate the unexpected server responses.

## Configuration

Playwright is configured to:

- Discover tests in the `tests/` directory.
- Run tests using Chromium.
- Use the configured application base URL.
- Record traces for test execution to support debugging.

