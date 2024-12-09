import React from 'react';
import PropTypes from 'prop-types';
import './ImageWithFade.css';

const ImageWithFade = ({
  imageSrc,
  fadeDirection,
  title,
  text,
  titleColor,
  textColor,
  titleFont,
  textFont,
  padding,
}) => {
  return (
    <div
      className="image-with-fade-container"
      style={{ padding: padding }} // Apply padding dynamically
    >
      {/* Image element */}
      <img src={imageSrc} alt="Fading" className="fade-image" />

      {/* Gradient overlay */}
      <div className={`fade-overlay fade-${fadeDirection}`} />

      {/* Text Overlay */}
      <div className="text-overlay-bottom">
        <div className="text-background">
          <h1
            className="responsive-title"
            style={{ color: titleColor, fontFamily: titleFont }}
          >
            {title}
          </h1>
          <p
            className="responsive-text"
            style={{ color: textColor, fontFamily: textFont }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

ImageWithFade.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  fadeDirection: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  textColor: PropTypes.string,
  titleFont: PropTypes.string,
  textFont: PropTypes.string,
  padding: PropTypes.string,
};

ImageWithFade.defaultProps = {
  fadeDirection: 'bottom',
  titleColor: '#000',
  textColor: '#333',
  titleFont: 'Arial, sans-serif',
  textFont: 'Arial, sans-serif',
  padding: '0', // Default padding is zero
};

export default ImageWithFade;
