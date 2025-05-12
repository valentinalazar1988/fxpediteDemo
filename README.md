# FXPedite Flight Search Test – QA Assessment

This project includes Cypress-based end-to-end (E2E) tests for verifying flight search functionality on the FXPedite demo booking website.

---

## Project Setup

### 1. Clone the Repository
```bash
https://github.com/valentinalazar1988/fxpediteDemo.git

## Prerequisites

- Install Node.js (v16 or higher recommended).
- Install project dependencies with:

  ```bash
  npm install
  ```

- This project uses cypress-mochawesome-reporter to generate detailed and visually rich test reports for Cypress tests. The reporter provides structured, HTML-based reports for better test result analysis (update cypress.config.js to contain the plugin).

```bash
  npm install --save-dev cypress-mochawesome-reporter
  ```

## Running the Tests
- Open the Cypress Test Runner:
  ```bash
  npx cypress open
  ```
  Select the desired test file from the UI.
- Run the tests in headless mode:
  ```bash
  npx cypress run
  ```

- To run the Shopping assignment, update the baseURL from cypress.config.js

## Test Cases

### 1. Search Flight (Basic)

**Description**:  
This test verifies that the flight search functionality works correctly for a basic round-trip scenario.

**Steps to Reproduce**:
1. Access the website: [https://web.demotm.journeymentor.net](https://web.demotm.journeymentor.net)
2. In the **"Where from"** field, type `London (Any)` and select any result from the dropdown.
3. In the **"Where to"** field, type `Amsterdam (AMS)` and select any result from the dropdown.
4. Select a valid **Date of Travel** from the calendar.
5. Select a valid **Date of Return**.
6. Click the **Search** button.

**Expected Result**:  
Flight results are displayed successfully based on the selected criteria.
