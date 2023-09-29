let currentPotValue = 0; // This variable acts as our makeshift database.

// POST Controller to update potentiometer value
const postPotValue = async (req, res) => {
  const { potValue } = req.body; // Destructure potValue from the request body.
  currentPotValue = potValue; // Update the global variable.
  console.log("Updated Potentiometer Value:", potValue);
  res.status(201).json({ potValue: currentPotValue });
};

// GET Controller to retrieve current potentiometer value
const getPotValue = (req, res) => {
  console.log("The /getPotValue route was accessed.");
  res.status(200).json({ potValue: currentPotValue });
};

module.exports = {
  postPotValue,
  getPotValue,
};
