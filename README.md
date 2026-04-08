# docs

WebDriverIO test project with QA documentation.

## Project Structure

```
.
├── docs/                        # QA documentation
│   ├── test-plans/              # Test plans (TP-xxx)
│   ├── test-cases/              # Test cases (TC-xxx)
│   └── evidence/                # Test execution evidence
├── test/
│   └── specs/                   # WebdriverIO test specs
│       └── example.spec.js      # Example smoke test
├── wdio.conf.js                 # WebdriverIO configuration
└── package.json
```

## Prerequisites

- Node.js 18+
- Google Chrome installed

## Setup

```bash
npm install
```

## Running Tests

```bash
npm test
```

This will launch WebdriverIO in headless Chrome and execute all specs under `test/specs/`.

## Documentation

| Folder                | Purpose                            |
|-----------------------|------------------------------------|
| `docs/test-plans/`    | High-level test plans per feature  |
| `docs/test-cases/`    | Detailed step-by-step test cases   |
| `docs/evidence/`      | Screenshots and execution reports  |
