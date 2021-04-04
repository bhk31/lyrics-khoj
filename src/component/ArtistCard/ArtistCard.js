import React from "react";
// import { Link } from "react-router-dom";
import styles from "./ArtistCard.module.css";

const ArtistCard = (props) => {
  const { image, alt, children } = { ...props };

  return (
    <div className={styles.artist} onClick="searchArtist('Miley Cirus')">
      <img src={image} alt={alt} />
      <p className={styles.artist_name}>{children}</p>
    </div>
  );
};

export default ArtistCard;
