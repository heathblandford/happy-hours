import React from "react";

const NeighborhoodFilter = ({ neighborhoodChange }) => {
  return (
    <div className="neighborhoodFilter">
      <select onChange={neighborhoodChange} id="nf">
        <option value="">Neighborhood</option>
        <option value="Oakley">Oakley</option>
        <option value="Over-the-Rhine">OTR</option>
        <option value="Banks">The Banks</option>
      </select>
    </div>
  );
};

export default NeighborhoodFilter;
