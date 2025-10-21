//Modified to work for the P4wnP1 A.L.O.A from Ducky Script
layout('us');
typingSpeed(60,80)
press('GUI r');
delay(3000);
type("notepad.exe");
press("ENTER");
delay(5000);
type('Greetings!');
delay(200)
press('ENTER');
delay(200)
type("You've just launched GoodUSB!");
delay(200)
press("ENTER");
press("ENTER");
delay(200)
type ("This script will take the following actions:");
delay(200)
press("ENTER");
delay(200)
type("1) Download ClamAV");
delay(200)
press("ENTER");
delay(200)
type("2) Update ClamAV to the latest malware definitition.");
delay(200)
press("ENTER");
delay(200)
type("3) Scan your system memory for any malicious processes.");
delay(200)
press("ENTER");
delay(200)
type("4) If any are found, TERMINATE THEM!");
delay(200)
press("ENTER");
press("ENTER");
delay(200)
type("This process may take a very long time, about 30 minutes to an hour.");
delay(200)
press("ENTER");
delay(200)
type("You can abort now by unplugging this device.");
delay(200)
press("ENTER");
delay(200)
type("Otherwise, the process will begin in 5...");
delay(3000);
type("4...");
delay(3000);
type("3...");
delay(3000);
type("2...");
delay(3000);
type("1...");
delay(3000);
type("0");
delay(200)
press("ENTER");
delay(200)
type("Away we go!");
delay(2000);
press("ALT F4");
delay(3000);
press("ALT N");
delay(2000);      
press("GUI r");
delay(5000);
type("powershell");
press("ENTER");
delay(5000);
type("Start-Process powershell -Verb runAs ; exit");
press("ENTER");
delay(5000);
press("TAB");
press("TAB");
press("ENTER");
delay(5000);
type('mkdir $env:USERPROFILE\\AppData\\Local\\Temp ; cd $env:USERPROFILE\\AppData\\Local\\Temp ; Invoke-WebRequest -Uri https://www.clamav.net/downloads/production/clamav-1.3.0.win.x64.zip -OutFile clam.zip ; Expand-Archive -Force clam.zip ; del clam.zip ; cd clam\\* ; mv .\\conf_examples\\freshclam.conf.sample freshclam.conf ; mv .\\conf_examples\\clamd.conf.sample clamd.conf ; Set-Content -Path "freshclam.conf" -Value (get-content -Path "freshclam.conf" | Select-String -Pattern "Example" -NotMatch) ; Set-Content -Path "clamd.conf" -Value (get-content -Path "clamd.conf" | Select-String -Pattern "Example" -NotMatch) ; Start-Process -Wait .\\freshclam.exe ; Start-Process -NoNewWindow -Wait .\\clamscan.exe "--memory --kill" ; cd $env:USERPROFILE\\AppData\\Local\\Temp ; rmdir -R clam');
press("ENTER");