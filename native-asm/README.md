# native-asm

This is the smallest local-build target.

The program does not package a browser or webview. It starts a tiny local HTTP
server, then asks Windows to open the system default browser with
`ShellExecute("open", "http://127.0.0.1:19001")`.

The HTTP server listens on `0.0.0.0:19001`, so devices on the same LAN can open
the page with:

```text
http://<this-pc-lan-ip>:19001
```

For example, if the PC address is `192.168.1.23`, use:

```text
http://192.168.1.23:19001
```

Windows Firewall may ask for network permission the first time the exe runs.

Build:

```bat
cd native-asm
build.bat
```

Output:

```text
native-asm\dist\vrc-chatbox-osc-asm.exe
```

The HTML UI is embedded into the executable as plain text, so the release can be
a single exe. That embedded HTML is only the page served to the user's existing
browser, not a browser runtime.
