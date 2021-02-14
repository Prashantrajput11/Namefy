import React from "react";
import NameCard from "./NameCard";

const Results = (props) => {
  const suggestedNamesResult = props.suggestedNames.map((suggestedName) => (
    <NameCard key={suggestedName} suggestedName={suggestedName} />
  ));
  return <div className="results-container">{suggestedNamesResult}</div>;
};
export default Results;
