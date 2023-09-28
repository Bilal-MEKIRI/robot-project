const express = require("express");
const cors = require("cors");

const PORT = 4000;
const HOST = '0.0.0.0'; // This means listening on all network interfaces
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/", require("./ledState/ledRoute.js"));

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
