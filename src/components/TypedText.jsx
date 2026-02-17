import React, { useState, useEffect } from "react";

const TypedText = ({ text, speed = 50, startDelay = 0, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let timeout;

    // Wait for initial delay
    if (!hasStarted && startDelay > 0) {
      timeout = setTimeout(() => {
        setHasStarted(true);
      }, startDelay);
    } else if (!hasStarted) {
      setHasStarted(true);
    }

    return () => clearTimeout(timeout);
  }, [hasStarted, startDelay]);

  useEffect(() => {
    if (!hasStarted) return;

    let timeout;

    if (displayedText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
    } else {
      setIsComplete(true);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, text, speed, hasStarted]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && hasStarted && (
        <span className="inline-block w-2 h-8 ml-1 bg-current animate-pulse"></span>
      )}
    </span>
  );
};

export default TypedText;
