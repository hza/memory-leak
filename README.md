#### Memory leak in node.js in debug mode (or firebase+node.js in debug mode).

Steps. 
1. Run firebase server from `firebase-emulator` folder 
2. Open this project in vscode, do `npm i` and then run app in debug mode.
3. `autocannon -c 100 -d 6000 -p 10 localhost:3000`

After 2-3 minutes of running debugger will stop the app with "PAUSED BEFORE OUT OF MEMORY EXCEPTION" hint.
