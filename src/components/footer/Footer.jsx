import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="infoText">
          MovieMania, a single-page movie web application using React.js,
          integrating third-party APIs for real-time data, and ensuring a
          seamless user experience with responsive design and efficient state
          management.
        </div>
        <div className="infoText">
          MovieMania, © 2024. All rights reserved to Yashika Yadav
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
