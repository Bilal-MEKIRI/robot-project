const express = require("express");
const cors = require("cors");
const http = require("http");
const WebSocket = require("ws");

const PORT = 4000;
const HOST = "0.0.0.0"; // This means listening on all network interfaces
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/", require("./ledState/ledRoute.js"));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log(`Recieved message: ${message}`);

    // Do something with the received message, like updating the LED state
    // Here, for simplicity, I am assuming the message directly contains the LED state (either "ON" or "OFF")
    // But in a real scenario, you'd likely want to parse a JSON message or some other structured data format
    if (message === "ON") {
      currentLedState = "ON";
    } else if (message === "OFF") {
      currentLedState = "OFF";
    }

    // Optionally, send a confirmation back to the client
    ws.send(`LED state set to ${currentLedState}`);
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
