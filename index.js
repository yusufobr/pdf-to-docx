const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const converter = require("./converter/converter");

// Define multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "converter/input/");
  },
  filename: function (req, file, cb) {
    cb(null, 'input.pdf'); // Keep the original filename with its extension
  },
});

// Create multer instance with the defined storage configuration
const upload = multer({ storage: storage });

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // Construct the path to the index.html file
  const indexPath = path.join(__dirname, "index.html");

  // Send the index.html file as the response
  res.sendFile(indexPath);
});

app.get("/convert", async (req, res) => {
  try {
    await converter();

    // Send a response to the client
    res.send("Conversion complete. Output saved to output.docx");
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});

app.post("/upload", upload.single("uploadedFile"), async (req, res, next) => {
  console.log("File uploaded successfully.");
  try {
    await converter();

    // Send a response to the client
    res.send("Conversion complete. Output saved to output.docx");
  } catch (err) {
    res.status(500).send("Something went wrong");
  }

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
