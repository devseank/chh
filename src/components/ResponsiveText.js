import React from 'react';
import PropTypes from 'prop-types';
import './ResponsiveText.css';

const ResponsiveText = ({
  title,
  text,
  titleColor,
  textColor,
  titleFont,
  textFont,
  titleSize,
  textSize,
}) => {
  return (
    <div className="responsive-text-container">
      <h1
        className="responsive-title"
        style={{
          color: titleColor,
          fontFamily: titleFont,
          fontSize: titleSize,
        }}
      >
        {title}
      </h1>
      <p
        className="responsive-paragraph"
        style={{
          color: textColor,
          fontFamily: textFont,
          fontSize: textSize,
        }}
      >
        {text}
      </p>
    </div>
  );
};

ResponsiveText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  textColor: PropTypes.string,
  titleFont: PropTypes.string,
  textFont: PropTypes.string,
  titleSize: PropTypes.string,
  textSize: PropTypes.string,
};

ResponsiveText.defaultProps = {
  titleColor: '#000',
  textColor: '#333',
  titleFont: 'Arial, sans-serif',
  textFont: 'Arial, sans-serif',
  titleSize: '2rem',
  textSize: '1rem',
};

export default ResponsiveText;
