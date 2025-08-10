import React from 'react';
// import { VStack } from '@chakra-ui/react';

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <div>
      <div {...boxProps}>{children}</div>
    </div>
  );
};

export default FullScreenSection;
