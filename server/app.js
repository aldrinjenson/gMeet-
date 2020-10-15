const express = require("express");
const morgan = require("morgan");
const { v4: uuidV4 } = require("uuid");

const app = express();
app.use(morgan("dev"));

const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.json());

app.get("/user/get-room-id", (req, res) => {
  res.json({ id: uuidV4() });
});

server.listen(5000);
