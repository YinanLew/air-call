import React, { useEffect, useState } from "react";
import "../css/card.css";
import Card from "./ui/Card";


function InBox({ data }) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const missedCalls = () => {
      const result = data.filter((d) => d.call_type === "missed");
      setFilteredData(result);
    };
    missedCalls();
  }, [data]);

    console.log(filteredData);
  return <Card filteredData={filteredData} />;
}

export default InBox;
