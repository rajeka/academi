import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="m-auto max-w-full p-3 flex justify-center bg-black">
        <p className="text-gray-500 text-sm font-semibold">
          &copy; {new Date().getFullYear()} Academiflow - My Profile. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
