const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const converter = require("./converter/converter");
const pdf2docxRouter = require("./routes/pdf2docx.route");

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

// Parse JSON bodies
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/test", (req, res) => {
  // Construct the path to the index.html file
  const indexPath = path.join(__dirname, "index.html");
  res.json({ data: "Hello from the server" });
  // Send the index.html file as the response
  // res.sendFile(indexPath);
});

app.get("/api/convert", async (req, res) => {
  try {
    await converter();

    // Send a response to the client
    res.send("Conversion complete. Output saved to output.docx");
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});

app.post("/api/upload", upload.single("uploadedFile"), async (req, res, next) => {
  console.log("File uploaded successfully.");
  try {
    await converter();

    // Send a response to the client
    res.json({ message: "Conversion complete. Output saved to output.docx" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }

});

// Routes
app.use("/api/pdf2docx", pdf2docxRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
