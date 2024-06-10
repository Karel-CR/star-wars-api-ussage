import React, { Component } from "react";

// import styles
import "../../styles/footer.css";

//import icons
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => (
  <footer className="footer star-foot text-center pb-1 pt-1">
    <ul className="footer-list media-list">
      <li className="tiktok social-icon">
        <a
          className="link aw-independent link_footer"
          href="https://www.tiktok.com/@starwars"
          target="_blank"
        >
          <FaTiktok className="tiktok" />
        </a>
      </li>

      <li className="instagram social-icon">
        <a
          className="link aw-independent link_footer"
          href="https://www.instagram.com/starwars/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="instagram" />
        </a>
      </li>

      <li className="xtwitter social-icon">
        <a
          className="link aw-independent link_footer"
          href="https://twitter.com/starwars"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="xtwitter" />
        </a>
      </li>
      <li className="facebook social-icon">
        <a
          className="link aw-independent link_footer"
          href="https://www.facebook.com/StarWars"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="facebook" />
        </a>
      </li>
      <li className="youtube social-icon">
        <a
          className="link aw-independent link_footer"
          href="https://www.youtube.com/user/starwars"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="youtube" />
        </a>
      </li>
    </ul>
  </footer>
);
