const express = require('express');
const app = express();

const sockets = require("socket.io");

const server = app.listen(8000, () => { console.log("Sockets on 8000")});

const io = sockets(server);

io.on("connection", socket => {

    console.log(socket.id);
    console.log("Nice to meet you.(shake hand)");

    socket.on("message-from-client", (data) => {
        console.log(data);
        socket.broadcast.emit("welcome ", data)
    });
})