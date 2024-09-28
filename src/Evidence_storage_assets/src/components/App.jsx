import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import CreateEvidence from "./CreateEvidence"; // Importing the new CreateEvidence component
import { Evidence_storage } from '../../../declarations/Evidence_storage';
import "../../assets/styles.css";

function App() {
  const [evidences, setEvidences] = useState([]);

  // Function to add new evidence
  async function addEvidence(newEvidence) {
    try {
      // Await the async call to store evidence on the blockchain
      await Evidence_storage.addEvidence(
        newEvidence.crimeType,
        newEvidence.description,
        newEvidence.details,
        newEvidence.area
      );

      // Fetch the updated list of evidences after adding the new one
      fetchData();
    } catch (error) {
      console.error("Error adding evidence:", error);
    }
  }

  useEffect(() => {
    fetchData(); // Fetch existing evidences on initial render
  }, []);

  // Function to fetch existing evidences
  async function fetchData() {
    try {
      const evidenceArray = await Evidence_storage.readEvidences();
      setEvidences(evidenceArray); // Update state with the evidence array fetched from the backend
    } catch (error) {
      console.error("Error fetching evidence data:", error);
    }
  }

  // Function to delete evidence by ID
  async function deleteEvidence(id) {
    try {
      await Evidence_storage.removeEvidence(id); // Removing evidence from backend
      setEvidences((prevEvidences) => {
        return prevEvidences.filter((evidenceItem) => evidenceItem.id !== id);
      });
    } catch (error) {
      console.error("Error deleting evidence:", error);
    }
  }

  return (
    <div>
      <Header />
      
      {/* CreateEvidence form for adding new evidence */}
      <CreateEvidence onAdd={addEvidence} />

      {/* Display the list of evidences */}
      <div className="container mt-4">
        {evidences.map((evidenceItem, index) => (
          <form key={index} className="form-container">
            <div className="mb-3">
              <label htmlFor={`crimeType-${index}`} className="form-label">Crime Type</label>
              <input
                type="text"
                className="form-control"
                id={`crimeType-${index}`}
                value={evidenceItem.crimeType}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`description-${index}`} className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                id={`description-${index}`}
                value={evidenceItem.description}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`details-${index}`} className="form-label">Details</label>
              <input
                type="text"
                className="form-control"
                id={`details-${index}`}
                value={evidenceItem.details}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`area-${index}`} className="form-label">Area</label>
              <input
                type="text"
                className="form-control"
                id={`area-${index}`}
                value={evidenceItem.area}
                readOnly
              />
            </div>

            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteEvidence(evidenceItem.id)}
            >
              Delete Evidence
            </button>
          </form>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
