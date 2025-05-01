import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <>
      <div className="footer-outer-container">
        <div className="footer-inner-container">
          <div className="footer-icons">
            <a><FacebookOutlinedIcon /></a>
            <a><InstagramIcon /></a>
            <a><YouTubeIcon /></a>
          </div>
          <div className="footer-data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms Of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="service-code">
            <p>Service Code</p>
          </div>
          <div className="copy-write">&copy; 1997-2024 Netflix, Inc.</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
