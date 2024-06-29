import React, { useEffect, useState } from "react";
import { HiMiniArrowLongDown } from "react-icons/hi2";
import axios from "axios";

const Pdf2Docx = () => {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile.type === "application/pdf") {
      setFile(droppedFile);
      setError("");
    } else {
      setError("Only PDF files are allowed");
    }
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleFileUpload = async () => {
    setUploading(true);

    if (!file) {
      setError("Please drop a file to upload");
      setUploading(false)
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      console.log('Target file:', formData);

      const response = await axios.post('/api/pdf2docx/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data); // Assuming the response is a success message
    } catch (error) {
      console.error('Error uploading file:', error);
    }
    setUploading(false);
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center max-w-screen-md">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-0 items-center">
          <h1 className="text-5xl">Online file converter</h1>
          <h2 className="text-2xl font-thin text-gray-400">
            Convert any file you want
          </h2>
        </div>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onClick={handleFileUpload}
          className={`flex flex-col items-center gap-4 p-4 px-10 max-w-md border border-white border-opacity-80 bg-white ${
            dragging || file ? "bg-opacity-95" : "bg-opacity-20"
          } backdrop-blur-sm rounded-lg shadow-xl`}
        >
          <HiMiniArrowLongDown size={50} />
          {file ? (
            <p>Selected File: {file.name}</p>
          ) : (
            <span>Drop your file here</span>
          )}
          {error && <p className="text-red-400">{error}</p>}
          {uploading && <p>Uploading...</p>}
        </div>
      </div>
    </div>
  );
};

export default Pdf2Docx;
