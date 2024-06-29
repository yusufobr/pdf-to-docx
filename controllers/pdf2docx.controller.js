const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/'); // Replace with your desired upload directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5 } }); // Set a limit (e.g., 5MB)

const uploadPdf2docx = async (req, res) => {
  upload.single('file')(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error uploading file', error: err.message });
    }

    // Handle successful upload (e.g., process file or send response)
    const uploadedFile = req.file;
    console.log('Uploaded file:', uploadedFile); // Log file details for debugging


    res.json({ message: 'File uploaded successfully!' });
  });
};

module.exports = { uploadPdf2docx };
