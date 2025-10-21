// Will quickly add a meeting via the New Outlook App. 
// e.g. If you want your contractor to pay lunch for you :)
layout('de');			// change layout to your needs
typingSpeed(40,0)		// adjust typing speed to your needs

press("GUI r");
delay(500);
type("ms-outlook:");
delay(500);
press("ENTER");
delay(4000);			//change to 5000 later on to wait if a completely new instance of Outlook needs to be spawned
press("CTRL 2");
delay(500);
press("CTRL SHIFT q");
delay(500);
type("Thanks for all the fish"); // Description of the meeting goes here
delay(500);
press ("TAB");
delay(500);
press ("TAB");
delay(500);
type("a.b@company.com;c.d@company.de"); // your recipients
delay(300);
press ("TAB");
delay(500);
press ("TAB");
delay(300);
press ("TAB");
delay(300);
type("2025-07-12")		// Start date - the format needs to fit. Like German, US Layout etc
delay(300);
press ("TAB");
delay(300);
type("13:00");			// start time
delay(300);
press ("TAB");
delay(300);
type("14:00");			// end time
delay(300);
press("CTRL ENTER");
delay(300);
press("ALT F4");
