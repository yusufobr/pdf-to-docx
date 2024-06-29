const express = require("express");
const { uploadPdf2docx } = require("../controllers/pdf2docx.controller");

const router = express.Router();

router.post('/upload', uploadPdf2docx);

module.exports = router;