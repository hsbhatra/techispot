import React from 'react';
import styles from '../style/Sidebar.module.css';
import sidebarData from '../data/sidebarData';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
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

      <section className={styles.communitySection}>
        <h3>🌐 Communities</h3>
        {sidebarData.communities.map((comm, i) => (
          <div key={i} className={styles.communityCard}>
            <div>
              <p><strong>{comm.name}</strong></p>
              <small>{comm.members} members</small>
            </div>
            <button>Join</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Sidebar;
