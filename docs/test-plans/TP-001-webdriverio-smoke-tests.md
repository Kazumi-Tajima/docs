# TP-001 – WebdriverIO Smoke Tests

## Objective
Verify that the core user-facing pages of the application are reachable and render expected content.

## Scope
- Homepage title validation
- Navigation links are present and functional

## Out of Scope
- Authentication flows
- API layer

## Test Environment
| Property    | Value           |
|-------------|-----------------|
| Browser     | Chrome (headless) |
| Framework   | WebdriverIO 9.x |
| Base URL    | https://webdriver.io |

## Entry Criteria
- Application is deployed and accessible
- WebdriverIO dependencies are installed (`npm install`)

## Exit Criteria
- All smoke test cases pass with no failures

## Test Cases
| ID       | Title                             | Priority |
|----------|-----------------------------------|----------|
| TC-001   | Homepage title is correct         | High     |
| TC-002   | Navigation menu items are visible | Medium   |

## Schedule
| Activity          | Date       |
|-------------------|------------|
| Test execution    | TBD        |
| Results review    | TBD        |
