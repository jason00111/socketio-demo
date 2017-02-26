>Socket.io is a powerful JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API.

-wikipedia

Socket.io uses the WebSocket protocol which is built on the TCP protocol (HTTP is also usually built on the TCP protocol).

This demo uses express but express is not required to use socket.io.  Check out the following links for more information and other ways to use socket.io.

https://www.npmjs.com/package/socket.io

https://github.com/socketio/socket.io


There are comments in the files `server.js` and `index.html` which explain what is happening.

To try it yourself, clone this repo and type:

`npm i`

`npm start`

to start the server and then open `localhost:3000` in multiple browser windows at the same time.
