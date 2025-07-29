// ============================================================================
// SIDEBAR COMPONENT - Community Management Interface
// ============================================================================
// This component provides a sidebar interface for managing communities
// It includes functionality to create new communities, upload images, and display existing communities

import React, { useState } from 'react';
import styles from './SideBar.module.css';
import Communities from '../home/community/Communities';
import { Modal, Button, Input } from '@mui/material';
import dataCommunity from '../home/community/Community_Data'; // Import initial community data

// ============================================================================
// SIDEBAR COMPONENT DEFINITION
// ============================================================================
export default function SideBar() {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  // Manage component state using React hooks
  const [openModal, setOpenModal] = useState(false);           // Control modal visibility
  const [newCommunityName, setNewCommunityName] = useState(''); // Store new community name input
  const [selectedImage, setSelectedImage] = useState('');      // Store selected image URL
  const [communityList, setCommunityList] = useState(dataCommunity); // LIFTED STATE - Manage community list

  // ============================================================================
  // MODAL HANDLERS
  // ============================================================================
  // Open the community creation modal
  const handleOpenModal = () => setOpenModal(true);
  
  // Close modal and reset form fields
  const handleCloseModal = () => {
    setOpenModal(false);
    setNewCommunityName('');    // Clear community name input
    setSelectedImage('');       // Clear selected image
  };

  // ============================================================================
  // IMAGE HANDLING
  // ============================================================================
  // Handle image file selection and preview
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a temporary URL for the selected image file
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // ============================================================================
  // COMMUNITY CREATION HANDLER
  // ============================================================================
  // Handle saving a new community to the list
  const handleSaveCommunity = () => {
    // Create new community object with provided data
    const newCommunity = {
      name: newCommunityName,
      pro: selectedImage || "https://img.icons8.com/?size=100&id=x2Lqrp3FigYc&format=png&color=000000", // Use selected image or default
      members: "0 Members" // Initialize with 0 members
    };

    // Add new community to the top of the list (most recent first)
    setCommunityList([newCommunity, ...communityList]);
    
    // Reset form and close modal
    setNewCommunityName('');
    setSelectedImage('');
    setOpenModal(false);
  };

  // ============================================================================
  // COMPONENT RENDER
  // ============================================================================
  return (
    <div className={styles.community}>
      {/* Community Header Section */}
      <div className={styles.box}>
        <h1 className={styles.commhead}>Community</h1>
        {/* Add Community Button */}
        <button className={styles.iconButton} onClick={handleOpenModal}>
          <i className="fa-regular fa-plus"></i>
        </button>
      </div>

      {/* Communities List Display */}
      <div className={styles.chats}>
        <Communities communities={communityList} />
      </div>

      {/* Community Creation Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <div className={styles.modalContent}>
          <h2>Add Community</h2>
          
          {/* Community Name Input */}
          <label htmlFor="communityNameInput">
            <input
              type="text"
              id="communityNameInput"
              placeholder="Community Name"
              value={newCommunityName}
              onChange={(e) => setNewCommunityName(e.target.value)}
            />
          </label>
          <br /><br />
          
          {/* Community Image Upload Section */}
          <label htmlFor="communityImageInput">
            <input
              type="file"
              id="communityImageInput"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }} // Hide the default file input
            />
            
            {/* Image Upload Interface */}
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '1rem'
            }}>
              {/* Image Upload Icon */}
              <i 
                className="fa-regular fa-image" 
                style={{ 
                  fontSize: '1.5rem', 
                  cursor: 'pointer',
                  color: '#00cfff'
                }} 
                onClick={() => document.getElementById('communityImageInput').click()}
                title="Click to select community image"
              ></i>
              
              {/* Upload Status Text */}
              <span style={{ fontSize: '0.9rem', color: '#ccc' }}>
                {selectedImage ? 'Image selected' : 'Click icon to select community image'}
              </span>
            </div>
            
            {/* Image Preview */}
            {selectedImage && (
              <div style={{ marginBottom: '1rem' }}>
                <img 
                  src={selectedImage} 
                  alt="Preview" 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100px', 
                    borderRadius: '8px',
                    border: '1px solid #ccc'
                  }} 
                />
              </div>
            )}
          </label>
          
          {/* Modal Action Buttons */}
          <div className={styles.saveNDcancel}>
            {/* Cancel Button */}
            <Button variant="contained" onClick={handleCloseModal}>
              Cancel
            </Button>
            
            {/* Save Button - Disabled if no community name provided */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveCommunity}
              style={{ marginRight: '10px' }}
              disabled={!newCommunityName.trim()} // Disable if name is empty or only whitespace
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
