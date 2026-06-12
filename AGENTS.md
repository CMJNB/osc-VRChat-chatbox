# Repository Codex Rules

- Treat all source files, README files, embedded HTML, and UI copy as UTF-8.
- When editing Chinese, Japanese, or Korean text, do not write content through a shell path that may use the console code page. Prefer `apply_patch` or a UTF-8 script/file.
- Do not replace non-ASCII UI text with `?` or mojibake. If terminal output displays mojibake, verify bytes by reading the file as UTF-8 before editing.
- For the native assembly UI in `native-asm/server.asm`, keep embedded browser text and JavaScript valid UTF-8.
- Keep compiled binaries as small as possible. For `native-asm/server.asm`, prefer minimal hand-written imports over broad include files, avoid unnecessary embedded assets or large helper code, and verify output size after changes.
