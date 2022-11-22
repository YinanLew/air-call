import React from "react";
import { options } from "./date";
import { Link } from "react-router-dom";
import axios from "axios";
import { ARCHIVE_CALL } from "../../utils/APIs";
import ArchiveIcon from "@mui/icons-material/Archive";
import PhoneMissedRoundedIcon from "@mui/icons-material/PhoneMissedRounded";
import PhoneCallbackRoundedIcon from "@mui/icons-material/PhoneCallbackRounded";
import VoicemailRoundedIcon from "@mui/icons-material/VoicemailRounded";

function Card({ filteredData }) {
  console.log(filteredData);

  // However, we do need an event-driven library, such as socket io to achieve real time update
  const archive = async (id) => {
    console.log(ARCHIVE_CALL + `${id}`);
    await axios
      .post(ARCHIVE_CALL + `${id}`, {
        is_archived: true,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className="missed-container">
      {filteredData.map((fd) => {
        return (
          <div className="key-div" key={fd.id}>
            {fd.is_archived === false ? (
              <>
                <div className="missed-date">
                  <div className="date-text">
                  {new Date(fd.created_at).toLocaleDateString("en-US", options)}
                  </div>
                </div>
                <div className="missed-container-card">
                  <div className="missed-logo">
                    {fd.call_type === "missed" ? (
                      <PhoneMissedRoundedIcon sx={{ color: "#ee491c" }} />
                    ) : fd.call_type === "answered" ? (
                      <PhoneCallbackRoundedIcon sx={{ color: "#43be21" }} />
                    ) : (
                      <VoicemailRoundedIcon />
                    )}
                  </div>
                  <Link to={`/caller/${fd.id}`}>
                    <div className="missed-from">{fd.from}</div>
                    <div className="missed-from-details">
                      {fd.call_type} call from {fd.from}
                    </div>
                  </Link>
                  <div className="missed-time">
                    {new Date(fd.created_at).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    <div className="archive">
                      <ArchiveIcon
                        onClick={() => archive(fd.id)}
                        sx={{ color: "#43be21", fontSize: 15 }}
                      />
                    </div>{" "}
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Card;
