@echo off
setlocal
if not exist dist mkdir dist
..\tools\fasm\FASM.EXE server.asm dist\vrc-chatbox-osc-asm.exe
