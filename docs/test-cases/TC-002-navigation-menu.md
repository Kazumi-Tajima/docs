# TC-002 – Navigation menu items are visible

## Metadata
| Property   | Value              |
|------------|--------------------|
| ID         | TC-002             |
| Test Plan  | TP-001             |
| Priority   | Medium             |
| Type       | Functional / Smoke |
| Automated  | No                 |

## Preconditions
- Browser is open
- `https://webdriver.io` is accessible

## Steps
| Step | Action                              | Expected Result                              |
|------|-------------------------------------|----------------------------------------------|
| 1    | Navigate to `https://webdriver.io`  | Page loads successfully                      |
| 2    | Inspect the top navigation bar      | Navigation bar is visible                    |
| 3    | Check that main menu links exist    | At least one navigation link is displayed    |

## Pass Criteria
Navigation bar is present and contains at least one visible link.

## Fail Criteria
Navigation bar is missing or contains no links.
