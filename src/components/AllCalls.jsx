import React from "react";
import Card from "./ui/Card";

function AllCalls({ data }) {
  return (
    <div className="missed-container">
      <Card filteredData={data} />
    </div>
  );
}

export default AllCalls;
