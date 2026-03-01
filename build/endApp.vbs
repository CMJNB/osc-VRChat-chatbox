set WSHshell = wscript.createobject("wscript.shell")
WSHshell.run "taskkill /im vrc-chatbox-osc.exe /f",0,true