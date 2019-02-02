import React from "react";

const NeighborhoodFilter = ({ neighborhoodChange }) => {
  return (
    <div className="neighborhoodFilter" id="nf">
      <select onChange={neighborhoodChange}>
        <option value="">Neighborhood</option>
        <option value="Oakley">Oakley</option>
        <option value="Over-the-Rhine">OTR</option>
        <option value="Banks">Banks</option>
      </select>
    </div>
  );
};

export default NeighborhoodFilter;
