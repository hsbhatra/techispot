import React from 'react';
import styles from '../style/MemeGallery.module.css';
import memeData from '../data/memeData';

const MemeGallery = () => {
  return (
    <div className={styles.memeGallery}>
      <h3>😂 Memes</h3>
      <div className={styles.grid}>
        {memeData.map((meme, i) => (
          <img key={i} src={meme.url} alt={meme.alt} />
        ))}
      </div>
    </div>
  );
};

export default MemeGallery;
