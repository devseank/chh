import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// FullScreenImageWithAnimatedText Component
const FullScreenImageWithAnimatedText = ({
  src,
  alt,
  imageOpacity = 100,
  textData, // Array of objects: { title, content }
  textBoxOpacity = 60,
  animationDirection = "left", // Options: 'left' or 'right'
}) => {
  const [animatedText, setAnimatedText] = useState([]);

  useEffect(() => {
    const letterAnimationDelay = 0.05; // Delay per letter in seconds
    const wordSpacingDelay = 0.1; // Delay between words
    let totalDelay = 0; // Cumulative delay tracker

    const newAnimatedText = textData.map(({ title, content }, paraIndex) => (
      <div key={paraIndex} style={{ marginBottom: "20px" }}>
        {/* Paragraph Title */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)", // Bigger and scalable font
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {title}
        </h2>

        {/* Paragraph Content */}
        <p
          style={{
            margin: "0",
            textAlign: "left",
            whiteSpace: "normal",
            fontSize: "clamp(1rem, 2vw, 1.5rem)", // Scalable content font
          }}
        >
          {content.split(" ").map((word, wordIndex) => {
            const wordContent = word.split("").map((letter, letterIndex) => {
              const currentDelay = totalDelay;
              totalDelay += letterAnimationDelay;

              return (
                <span
                  key={letterIndex}
                  style={{
                    display: "inline-block",
                    opacity: 0,
                    transform: `translateX(${animationDirection === "left" ? "-20px" : "20px"})`,
                    animation: `slideIn 0.5s ease-out forwards`,
                    animationDelay: `${currentDelay}s`,
                  }}
                >
                  {letter}
                </span>
              );
            });

            totalDelay += wordSpacingDelay; // Add space delay
            return (
              <span key={wordIndex} style={{ display: "inline-block" }}>
                {wordContent}
                <span>&nbsp;</span>
              </span>
            );
          })}
        </p>
      </div>
    ));

    setAnimatedText(newAnimatedText);
  }, [textData, animationDirection]);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Background Image */}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: imageOpacity / 100,
        }}
      />

      {/* Text Box Overlay */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "800px",
          background: `rgba(0, 0, 0, ${textBoxOpacity / 100})`,
          color: "white",
          padding: "20px",
          textAlign: "left",
          boxSizing: "border-box",
          lineHeight: "1.5",
        }}
      >
        {animatedText}
      </div>

      {/* Keyframes Animation */}
      <style>
        {`
          @keyframes slideIn {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

FullScreenImageWithAnimatedText.propTypes = {
  src: PropTypes.string.isRequired, // Image URL
  alt: PropTypes.string, // Alt text
  imageOpacity: PropTypes.number, // Image opacity (0-100)
  textData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired, // Array of objects with title and content
  textBoxOpacity: PropTypes.number, // Text box opacity (0-100)
  animationDirection: PropTypes.oneOf(["left", "right"]), // Animation direction
};

FullScreenImageWithAnimatedText.defaultProps = {
  alt: "Image",
  imageOpacity: 100,
  textBoxOpacity: 60,
  animationDirection: "left",
};

export default FullScreenImageWithAnimatedText;
