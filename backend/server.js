const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from React build folder
app.use(express.static(path.join(__dirname, "build")));

// Example API route (for contact form)
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact Form Data:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.json({ success: true, message: "Message received successfully!" });
});

// Handle React routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
