let currentLedState = "OFF"; // This variable acts as our makeshift database.

// POST Controller to update LED state
const postLedState = async (req, res) => {
  const { ledState } = req.body; // Destructure ledState from the request body.
  currentLedState = ledState; // Update the global variable.
  console.log("Updated LED State:", ledState);
  res.status(201).json({ ledState: currentLedState });
};

// GET Controller to retrieve current LED state
const getLedState = (req, res) => {
  console.log("The /getLedState route was accessed by the esp32.");
  res.status(200).json({ ledState: currentLedState });
};

module.exports = {
  postLedState,
  getLedState,
};
