import React, { useState } from 'react';
import styles from '../style/Sidebar.module.css';
import sidebarData from '../data/sidebarData';

const Sidebar = () => {
  const [communities, setCommunities] = useState(sidebarData.communities);
  const [showModal, setShowModal] = useState(false);
  const [newCommunity, setNewCommunity] = useState({ name: '', members: '' });

  const handleAddCommunity = (e) => {
    e.preventDefault();
    if (!newCommunity.name || !newCommunity.members) return;

    const updated = [...communities, newCommunity];
    setCommunities(updated);
    setNewCommunity({ name: '', members: '' });
    setShowModal(false);
  };

  return (
    <div className={styles.sidebar}>
      {/* Mentor Section */}
      <section className={styles.mentorSection}>
        <h3>👨‍🏫 Mentor Helps</h3>
        {sidebarData.mentors.map((mentor, i) => (
          <div key={i} className={styles.mentorCard}>
            <img src={mentor.image} alt={mentor.name} />
            <div>
              <p><strong>{mentor.name}</strong></p>
              <small>{mentor.company}</small>
            </div>
          </div>
        ))}
      </section>

      {/* Community Section */}
      <section className={styles.communitySection}>
        <h3>
          🌐 Communities
          <button onClick={() => setShowModal(true)} className={styles.addBtn}>➕</button>
        </h3>
        {communities.map((comm, i) => (
          <div key={i} className={styles.communityCard}>
            <div>
              <p><strong>{comm.name}</strong></p>
              <small>{comm.members} members</small>
            </div>
            <button>Join</button>
          </div>
        ))}
      </section>

      {/* Add Community Modal */}
      {showModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <h4>Add New Community</h4>
            <form onSubmit={handleAddCommunity}>
              <input
                type="text"
                placeholder="Community Name"
                value={newCommunity.name}
                onChange={(e) => setNewCommunity({ ...newCommunity, name: e.target.value })}
              />
              <input
                type="number"
                placeholder="Members Count"
                value={newCommunity.members}
                onChange={(e) => setNewCommunity({ ...newCommunity, members: e.target.value })}
              />
              <div className={styles.actions}>
                <button type="submit">Add</button>
                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
