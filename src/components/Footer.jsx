import React from 'react';
// import { Box, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    // <dev>
    <footer>
      <div className="m-auto max-w-full p-3 flex justify-center bg-black">
        <p className="text-gray-500 text-sm font-semibold">
          &copy; {new Date().getFullYear()} My Profile. All rights reserved.
        </p>
      </div>
    </footer>
    // </dev>
  );
};
export default Footer;
