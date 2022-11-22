import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Inbox from "./components/Inbox.jsx";
import AllCalls from "./components/AllCalls.jsx";
import axios from "axios";
import { Routes, Route } from 'react-router-dom';
import { ACTIVITY_FEED } from "./utils/APIs.js";
import Archive from "./components/Archive.jsx";
import Footer from "./components/Footer.jsx";
import CallerDetails from "./components/CallerDetails.jsx";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllCalls = async () => {
      await axios.get(ACTIVITY_FEED).then((response) => {
        setData(response.data);
      }).catch(err => console.log(err));
    };
    getAllCalls();
  }, []);

  const unread = data.filter((d) => d.call_type === 'missed').length;

  return (
    <div className="container">
      <Header />
      <Archive data={data} />
      <div className="container-view">

        <Routes>
          <Route path="/" element={ <Inbox data={data} />} />

          <Route path="/allcalls" element={<AllCalls data={data} />} />

          <Route
            path="/caller/:id"
            element={<CallerDetails />}
          />
        </Routes>
      </div>
      <Footer unread={unread} />
    </div>
  );
}

export default App;
