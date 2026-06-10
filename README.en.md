# VRC Chatbox OSC

A tiny Windows native tool that uses a browser UI to send translated text to the VRChat chatbox through OSC.

This version has been rewritten from Node.js to 32-bit Win32 assembly and is built with FASM. The release is a single executable: it starts a local HTTP server and opens the system default browser. It does not package Node.js, Chromium, WebView, or any browser runtime.

[中文 README](README.md)

## Features

- Single executable release, currently about 11 KB.
- Uses the system default browser for the UI.
- LAN access: the server listens on `0.0.0.0:19001`.
- Sends OSC to VRChat at `127.0.0.1:9000` with address `/chatbox/input`.
- Default source language is Chinese, default target language is English.
- Auto-translates text and sends:

  ```text
  original text
  translated text
  ```

- Free public translation through MyMemory.
- Optional AI translation through OpenAI-compatible chat completion APIs.
- Page-session counting: if multiple tabs or LAN devices are open, the background service exits only when the last page closes.

## Supported AI APIs

The AI mode uses the OpenAI-compatible Chat Completions request shape:

```text
POST <base-url>/chat/completions
Authorization: Bearer <api-key>
```

Built-in presets:

| Provider | Base URL | Default model |
| --- | --- | --- |
| ChatGPT / OpenAI | `https://api.openai.com/v1` | `gpt-4o-mini` |
| DeepSeek | `https://api.deepseek.com` | `deepseek-chat` |
| Tencent Hunyuan | `https://api.hunyuan.cloud.tencent.com/v1` | `hunyuan-turbos-latest` |
| Custom | user supplied | user supplied |

Tencent Yuanbao itself is usually a consumer app, not a general third-party API. If you have Tencent model API access, use the Tencent Hunyuan preset or the custom OpenAI-compatible option.

## Security Note

AI settings are saved beside the executable in:

```text
settings.json
```

This file may contain your API key. Do not copy it, upload it, commit it, or send it to anyone.

## Usage

1. Enable OSC in VRChat.
2. Run `vrc-chatbox-osc.exe`.
3. Windows opens `http://127.0.0.1:19001` in your default browser.
4. The default direction is Chinese to English. You can change it on the page.
5. Type text and press `Enter` to translate and send.
6. Press `Ctrl + Enter` for a newline.

For phone or LAN access, open this on another device in the same network:

```text
http://<this-pc-lan-ip>:19001
```

Windows Firewall may ask for network permission on first run. Allow it if you need LAN access.

## Build

The repository includes a small portable FASM toolchain under `tools/fasm`.

```bat
cd native-asm
release.bat
```

Output:

```text
native-asm\release\vrc-chatbox-osc.exe
```

## Project Layout

```text
native-asm/
  server.asm      Main Win32 assembly source, including the embedded browser UI
  build.bat       Builds dist\vrc-chatbox-osc-asm.exe
  release.bat     Builds and copies release\vrc-chatbox-osc.exe
  README.md       Native build notes

tools/fasm/
  FASM.EXE        Portable assembler
  INCLUDE/        Win32 include files used by FASM
```

## Release Packaging

The release asset should contain only:

```text
vrc-chatbox-osc.exe
```

Do not include `settings.json` in a release package.
