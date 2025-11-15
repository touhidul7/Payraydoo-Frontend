"use client";

import { useState, useRef } from "react";

export default function ImaImageInput({
  label = "Upload Image",
  name = "image",
  value = null, // base64 or file URL coming from parent
  onChange = () => {}, // callback: returns File object
  width = "400px",
  maxSize = 10 * 1024 * 1024, // 10MB
  accept = "image/png, image/jpg, image/jpeg, image/gif",
  className = "",
}) {
  const [preview, setPreview] = useState(value);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("border-indigo-600");

    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("border-indigo-600");
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove("border-indigo-600");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (!file) return;

    if (file.size > maxSize) {
      alert(`File size exceeds ${maxSize / (1024 * 1024)}MB`);
      return;
    }

    displayPreview(file);
    onChange(file); // Return file to parent
  };

  const displayPreview = (file) => {
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={`relative border-2 w-full border-gray-300 border-dashed rounded-lg p-6 ${className}`}
      style={{ width }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {/* Hidden Input */}
      <input
        type="file"
        name={name}
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={accept}
        className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
      />

      <div className="text-center pointer-events-none">
        <img
          className="mx-auto h-12 w-12"
          src="https://www.svgrepo.com/show/357902/image-upload.svg"
          alt=""
        />

        <h3 className="mt-2 text-sm font-medium text-gray-900">
          <span>{label} - Drag & drop</span>
          <span className="text-indigo-600"> or browse</span>
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {accept.toUpperCase()} up to {maxSize / (1024 * 1024)}MB
        </p>
      </div>

      {preview && (
        <img
          src={preview}
          className="mt-4 mx-auto max-h-40 rounded-md"
          alt="Image Preview"
        />
      )}
    </div>
  );
}
