import React from "react";

function Evidence(props) {
  return (
    <tr>
      <td>{props.crimeType}</td>
      <td>{props.description}</td>
      <td>{props.details}</td>
      <td>{props.area}</td>
      <td>
        <button onClick={() => props.onDelete(props.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Evidence;
