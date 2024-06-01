import React, { useState } from "react";
import icon from "../assets/down-arrow-svgrepo-com.svg";
import { HiMiniArrowLongDown } from "react-icons/hi2";

const Pdf2Docx = () => {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");

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
          className={`flex flex-col items-center gap-4 p-4 px-10 max-w-md border border-white border-opacity-80 bg-white ${
            dragging || file ? "bg-opacity-95" : "bg-opacity-20"
          } backdrop-blur-sm rounded-lg shadow-xl`}
        >
          {/* <img className="h-16 w-16" src={icon} alt="" /> */}
          <HiMiniArrowLongDown size={50} />
          {file ? (
            <p>Selected File: {file.name}</p>
          ) : (
            <span>Drop your file here</span>
          )}
          {error && <p className="text-red-400">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Pdf2Docx;
