import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="relative container mx-auto p-6 bottom-0 mt-auto dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20 ml-5">
          <Link to="/">©2023 JxTech. All Rights Reserved.</Link>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
          <Link to="/" className="hover:text-darkBlue hover:underline">
            About
          </Link>
          <Link to="/" className="hover:text-darkBlue hover:underline">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:text-darkBlue hover:underline">
            Licensing
          </Link>
          <Link to="/" className="hover:text-darkBlue hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
