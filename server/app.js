const express = require("express");
const morgan = require("morgan");
const { v4: uuidV4 } = require("uuid");

const app = express();
app.use(morgan("dev"));

const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.json());

const users = [];

app.post("/user/get-room-id", (req, res) => {
  const roomId = "325";
  const userId = uuidV4();
  const user = {
    userName: req.body.userName,
    userId,
  };
  users.push(user);
  res.json({ user, roomId });
});

server.listen(5000);
