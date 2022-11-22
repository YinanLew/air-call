import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import CallIcon from "@mui/icons-material/Call";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import "../css/footer.css";

function Footer({ unread }) {
  return (
    <div className="footer-container">
      <Link to="/">
        <Badge badgeContent={unread} sx={{ color: "#ee491c" }}>
          <CallIcon sx={{ color: "black" }} />
        </Badge>
      </Link>

      <ContactPhoneIcon />
      <SettingsSuggestIcon />
    </div>
  );
}

export default Footer;
