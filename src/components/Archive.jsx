import React from "react";
// import axios from "axios";
// import { ARCHIVE_CALL } from "../utils/APIs";
import "../css/archive.css";
import InventoryIcon from "@mui/icons-material/Inventory";

// `${data.id}` There is no API for archive all phone calls at one click, loop all the ids is not a good choice.

function Archive({ data }) {
  // const archive = async () => {
  //   await axios.post(ARCHIVE_CALL + ``, {
  //     is_archived: false
  //   });
  // };

  return (
    <div className="archive-container-card">
      <InventoryIcon /> <span>Archive all calls</span>
    </div>
  );
}

export default Archive;
