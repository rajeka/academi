import React from "react";
/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, ...boxProps }) => {
  return (
    <div>
      <div {...boxProps}>{children}</div>
    </div>
  );
};

export default FullScreenSection;
