// ============================================================================
// UPLOAD COMPONENT - Media File Upload Interface
// ============================================================================
// This component provides a drag-and-drop interface for uploading images and videos
// It includes file preview, type detection, and supports both click and drag uploads

import React, { useState } from "react";

// ============================================================================
// UPLOAD COMPONENT DEFINITION
// ============================================================================
export default function Upload({ handleImageUpload }) {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  // Manage component state using React hooks
  const [file, setFile] = useState(null);      // Store uploaded file URL for preview
  const [fileType, setFileType] = useState(""); // Store file MIME type for validation

  // ============================================================================
  // FILE HANDLING FUNCTIONS
  // ============================================================================
  // Handle file selection via file input
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0]; // Get the selected file
    setFile(URL.createObjectURL(uploadedFile)); // Create preview URL
    setFileType(uploadedFile.type); // Store file type (image/* or video/*)
  };

  // ============================================================================
  // DRAG AND DROP HANDLERS
  // ============================================================================
  // Prevent default behavior when dragging over the drop zone
  const handleDragOver = (event) => {
    event.preventDefault(); // Allow drop by preventing default
  };

  // Handle file drop event
  const handleDrop = (event) => {
    event.preventDefault(); // Prevent default browser behavior
    const mediaFile = event.dataTransfer.files[0]; // Get dropped file
    setFile(URL.createObjectURL(mediaFile)); // Create preview URL
    setFileType(mediaFile.type); // Store file type
  };

  // Handle drag leave event
  const handleDragLeave = (event) => {
    event.preventDefault(); // Prevent default behavior
  };

  // ============================================================================
  // UPLOAD HANDLER
  // ============================================================================
  // Handle final upload submission
  const handleUpload = (event) => {
    event.preventDefault(); // Prevent form submission
    handleImageUpload(fileType, file); // Pass file type and URL to parent component
  };

  // ============================================================================
  // COMPONENT RENDER
  // ============================================================================
  return (
    <>
      {/* Drag and Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        style={{
          border: "2px dashed #ccc", // Dashed border for drop zone
          padding: "20px",
          textAlign: "center",
        }}
      >
        {/* File Preview Section */}
        {file && (
          <div>
            {/* Conditional rendering based on file type */}
            {fileType.startsWith("image") ? (
              // Image preview
              <img src={file} alt="Preview" style={{ maxWidth: "90%" }} />
            ) : (
              // Video preview with controls
              <video src={file} controls style={{ maxWidth: "90%" }} />
            )}
          </div>
        )}

        {/* Upload Instructions */}
        <h2>Select files to begin</h2>
        <p>Drag & drop an image or video here or click to select one</p>
        
        {/* File Input for Click Upload */}
        <input
          type="file"
          accept="image/*,video/*" // Accept only image and video files
          onChange={handleFileChange}
        />
      </div>

      {/* Upload Button Section */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button onClick={handleUpload}>Upload</button>
      </div>
    </>
  );
}
