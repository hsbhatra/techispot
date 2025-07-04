import React from 'react';
import styles from '../style/TechNews.module.css';
import newsData from '../data/newsData';

const TechNews = () => {
  return (
    <div className={styles.newsSection}>
      <h3>📰 Tech News</h3>
      {newsData.map((item, index) => (
        <div key={index} className={styles.newsCard}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <strong>{item.title}</strong>
          </a>
          <p>{item.source} · {item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default TechNews;
