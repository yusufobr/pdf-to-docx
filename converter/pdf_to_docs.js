const { PythonShell } = require('python-shell');
const path = require('path');

// Define the paths to your PDF and the output DOCX file
const pdfFilePath = path.join(__dirname, 'input.pdf');
const docxFilePath = path.join(__dirname, 'output2.docx');

// Options for the PythonShell
const options = {
  mode: 'text',
  pythonPath: 'python3', // Path to your Python executable
  pythonOptions: ['-u'], // Unbuffered mode
  scriptPath: __dirname, // Current directory
  args: [pdfFilePath, docxFilePath],
};

// Run the Python script using python-shell
PythonShell.run('pdf-to-doc.py', options, function (err) {
  if (err) throw err;
  else
  console.log('Conversion complete. Output saved to output.docx');
});
