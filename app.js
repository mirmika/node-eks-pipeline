const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to handle the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Sample API route to send a JSON response
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from API!" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
