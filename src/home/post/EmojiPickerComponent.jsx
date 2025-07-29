// ============================================================================
// EMOJI PICKER COMPONENT - Emoji Selection Interface
// ============================================================================
// This component provides an emoji picker interface for users to add emojis
// to their posts. It uses the emoji-picker-react library for the emoji grid.

import EmojiPicker from 'emoji-picker-react'; // Third-party emoji picker library
import styles from './EmojiPicker.module.css'; // CSS modules for styling

// ============================================================================
// EMOJI PICKER COMPONENT DEFINITION
// ============================================================================
const EmojiPickerComponent = ({ onSelect }) => {
  // ============================================================================
  // COMPONENT RENDER
  // ============================================================================
  return (
    <div className={styles.emojiBox}>
      {/* Emoji Picker Component */}
      <EmojiPicker 
        onEmojiClick={(e) => onSelect(e.emoji)} // Handle emoji selection and pass to parent
      />
    </div>
  );
};

// Export the EmojiPickerComponent as the default export
export default EmojiPickerComponent;
