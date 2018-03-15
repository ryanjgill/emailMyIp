# emailMyIp
Email IP of SBC. Used when switching networks.

Run this on boot to get an email with the ip the device.

## Example useage on Raspberry Pi
Assuming the following:
- default user name of `pi`
- `which node` returns `/usr/local/bin/node`

1. Clone to the user directory `git clone https://github.com/ryanjgill/emailMyIp.git`
2. Change directories to emailMyIp and install node dependencies`cd emailMyIp && npm i`
3. Update `config.js` with your email and password (you can generate an `app password` so you don't have to use your raw password 
[Google App Passwords](https://myaccount.google.com/apppasswords "Google App Passwords")
5. Add to startup on pi. I'll use `/etc/rc.local` to exectue this command on boot
- `cd /etc`
- `sudo nano rc.local`
- Add this line to execute the node app on boot `/usr/local/bin/node /home/pi/emailMyIp/index.js`

Your device should send an email on each boot with the device ip.

You can run it manaully by executing the command `/usr/local/bin/node /home/pi/emailMyIp/index.js`