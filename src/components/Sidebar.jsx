import React, { useState } from "react";
import styles from "../style/Sidebar.module.css";
import sidebarData from "../data/sidebarData";

const Sidebar = () => {
  const [communities, setCommunities] = useState(sidebarData.communities);
  const [showModal, setShowModal] = useState(false);
  const [newCommunity, setNewCommunity] = useState({ name: "", members: "" });

  const handleAddCommunity = (e) => {
    e.preventDefault();

    const trimmedName = newCommunity.name.trim();
    const memberCount = Number(newCommunity.members);

    if (!trimmedName) {
      alert("Community name cannot be empty.");
      return;
    }

    if (!memberCount || memberCount < 1) {
      alert("Members count must be a positive number.");
      return;
    }

    const updated = [
      ...communities,
      { name: trimmedName, members: memberCount },
    ];
    setCommunities(updated);
    setNewCommunity({ name: "", members: "" });
    setShowModal(false);
  };

  return (
    <div className={styles.sidebar}>
      {/* Mentor Section */}
      <section className={styles.mentorSection}>
        <h3>👨 Mentor Helps</h3>
        {sidebarData.mentors.map((mentor, i) => (
          <div key={i} className={styles.mentorCard}>
            <img src={mentor.image} alt={mentor.name} />
            <div>
              <p>
                <strong>{mentor.name}</strong>
              </p>
              <small>{mentor.company}</small>
            </div>
          </div>
        ))}
      </section>

      {/* Community Section */}
      <section className={styles.communitySection}>
        <h3>
          🌐 Communities
          {localStorage.getItem("loggedInUser") && (
            <button
              onClick={() => setShowModal(true)}
              className={styles.addBtn}> ➕ </button>
          )}
        </h3>
        {communities.map((comm, i) => (
          <div key={i} className={styles.communityCard}>
            <div>
              <p>
                <strong>{comm.name}</strong>
              </p>
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
                onChange={(e) =>
                  setNewCommunity({ ...newCommunity, name: e.target.value })
                }
              />
              <input
                type="number"
                min="1"
                placeholder="Members Count"
                value={newCommunity.members}
                onChange={(e) =>
                  setNewCommunity({ ...newCommunity, members: e.target.value })
                }
              />
              <div className={styles.actions}>
                <button type="submit">Add</button>
                <button type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
