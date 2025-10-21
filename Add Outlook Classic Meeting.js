// Will quickly add a meeting via Outlook Classic. 
// e.g. If you want your contractor to pay lunch for you :)
layout('de');		// change keyboard layout to your needs	
typingSpeed(20,0)	// adjust typing speed to your needs

press("GUI r");
delay(500);
type("outlook\n")
delay(5000);			//change to 5000 later on to wait if a completely new instance of Outlook needs to be spawned
press("CTRL SHIFT q");
delay(500);
type("Thanks for all the fish"); // Title of the meeting
delay(500);
press ("TAB");
delay(500);
type("a@test.com;b@test.de"); // Recipients
delay(300);
press ("TAB");
delay(300);
press ("TAB");
delay(300);
press ("TAB");
delay(300);
type("12/07/2025")     //Starting date - the format needs to fit. Like German, US Layout etc 12.07.2025
delay(300);
press ("TAB");
delay(300);
press ("TAB");
delay(300);
type("13:00")         //Starting time - the format needs to fit. Like German, US Layout etc
delay(300);
press ("TAB");
delay(300);
type("12/07/2025")     //End date - the format needs to fit. Like German, US Layout etc
delay(300);
press ("TAB");
delay(300);
press ("TAB");
delay(300);
type("14:00")         //End time - the format needs to fit. Like German, US Layout etc
delay(300);
press("ALT s");
delay(300);
press("ALT F4")
