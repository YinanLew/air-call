import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { USER_DETAILS } from "../utils/APIs";
import { options } from "./ui/date";
import "../css/callDetails.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Avatar from "../assets/icons8-morty-smith-500.png";

function CallerDetails({ showDetails }) {
  const [callerDetails, setCallerDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchCallerDetails = async () => {
      await axios.get(USER_DETAILS + `${id}`).then((response) => {
        setCallerDetails(response.data);
      });
    };
    fetchCallerDetails();
  }, [id]);

  return (
    <div className="call-details-container">
      <Link to="/">
        <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
        Back
      </Link>
      <div className="call-details-avatar">
        <img src={Avatar} alt="avatar" height={120} width={120} />
      </div>
      <div className="call-details-title">{callerDetails.from}</div>
      <div className="call-details-to">to {callerDetails.to}</div>
      <div className="call-details-time">
        <div>
          {new Date(callerDetails.created_at).toLocaleDateString(
            "en-US",
            options
          )}
        </div>
        <div>
          {new Date(callerDetails.created_at).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          {callerDetails.direction} {callerDetails.duration} seconds
        </div>
      </div>
      <div className="call-details-location">
        <div>{callerDetails.call_type}</div>
        <div>Location: {callerDetails.via}</div>
      </div>
    </div>
  );
}

export default CallerDetails;
