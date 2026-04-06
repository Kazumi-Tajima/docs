# TC-001 – Homepage title is correct

## Metadata
| Property   | Value                   |
|------------|-------------------------|
| ID         | TC-001                  |
| Test Plan  | TP-001                  |
| Priority   | High                    |
| Type       | Functional / Smoke      |
| Automated  | Yes (`example.spec.js`) |

## Preconditions
- Browser is open
- `https://webdriver.io` is accessible

## Steps
| Step | Action                            | Expected Result                          |
|------|-----------------------------------|------------------------------------------|
| 1    | Navigate to `https://webdriver.io` | Page loads successfully (HTTP 200)      |
| 2    | Read the page title               | Title contains the text `"WebdriverIO"` |

## Pass Criteria
Page title contains `"WebdriverIO"`.

## Fail Criteria
Page title does not contain `"WebdriverIO"` or page fails to load.
