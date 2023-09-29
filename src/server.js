const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");

const PORT = 4000;
const HOST = "0.0.0.0"; // This means listening on all network interfaces
const app = express();

const server = http.createServer(app); // Create an HTTP server
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000", //This will allow any origin to connect. Adjust this if you want to restrict origins.
    methods: ["GET", "POST"],
  },
}); // Bind socket.io to that server

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("ledStateChange", (data) => {
    console.log("LED state: ", data.ledState);
    currentLedState = data.ledState; // Update our makeshift database
    // Inform other clients (e.g., ESP32) about the change
    io.emit("ledStateChange", { ledState: currentLedState });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// app.use("/", require("./ledState/ledRoute.js"));

server.listen(PORT, HOST, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
