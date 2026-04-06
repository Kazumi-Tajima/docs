# Evidence

This folder stores test execution evidence (screenshots, logs, reports).

## Structure

Organise evidence by test run date and test plan:

```
evidence/
└── YYYY-MM-DD/
    └── TP-<ID>/
        ├── TC-<ID>-<result>.png   # Screenshots
        └── execution-report.txt   # Console / reporter output
```

## Notes
- Screenshots should be captured automatically by the framework on failure.
- Manual test evidence (e.g., screen recordings) should be uploaded here as well.
- Do **not** commit large binary files; use Git LFS or link to an external storage location instead.
