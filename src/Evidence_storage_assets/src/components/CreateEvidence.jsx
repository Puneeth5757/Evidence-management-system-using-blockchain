import React, { useState } from "react";

function CreateEvidence(props) {
  const [evidence, setEvidence] = useState({
    crimeType: "",
    description: "",
    details: "",
    area: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setEvidence((prevEvidence) => ({
      ...prevEvidence,
      [name]: value
    }));
  }

  function submitEvidence(event) {
    event.preventDefault(); // Prevent form default behavior
    props.onAdd(evidence);  // Call parent's add function

    // Reset form fields
    setEvidence({
      crimeType: "",
      description: "",
      details: "",
      area: ""
    });
  }

  return (
    <div className="container mt-4">
      <form 
        onSubmit={submitEvidence} 
        className="border p-4 shadow-sm rounded"
        style={{ backgroundColor: 'white', opacity: 1 }} // Inline style for solid background
      >
        <h3>Upload Evidence</h3>
        <div className="mb-3">
          <label htmlFor="crimeType" className="form-label">Crime Type</label>
          <input
            type="text"
            name="crimeType"
            className="form-control"
            id="crimeType"
            value={evidence.crimeType}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="description"
            value={evidence.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="details" className="form-label">Details</label>
          <input
            type="text"
            name="details"
            className="form-control"
            id="details"
            value={evidence.details}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="area" className="form-label">Area</label>
          <input
            type="text"
            name="area"
            className="form-control"
            id="area"
            value={evidence.area}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Add Evidence</button>
      </form>
    </div>
  );
}

export default CreateEvidence;
