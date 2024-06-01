const { PythonShell } = require("python-shell");
const path = require("path");

// Define the converter function
const converter = async () => {
  const scriptPath = path.join(__dirname, "converter.py"); // Construct the path to converter.py

  console.log("Converting PDF to DOCX...");

  
  await  PythonShell.run(scriptPath, null, function (err) {
      if (err) {
        console.error("Error executing Python script:", err);
        reject(err);
      } else {
        console.log("Conversion complete. Output saved to output.docx");
        resolve();
      }
    });

    console.log("Conversion complete. Output saved to output.docx");
};

// Export the converter function
module.exports = converter;
