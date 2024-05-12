import React from 'react';
import './HoverCard.css'; // Import the CSS file

const HoverCard = ({ href, coverImage, titleImage, characterImage }) => {
  return (
    <a href={href} alt="Mythrill" target="_blank" className="hovercard">
      <div className="wrapper">
        <img src={coverImage} className="cover-image" alt="Cover" />
      </div>
      <img src={titleImage} className="title" alt="Title" />
      <img src={characterImage} className="character" alt="Character" />
    </a>
  );
};

export default HoverCard;
