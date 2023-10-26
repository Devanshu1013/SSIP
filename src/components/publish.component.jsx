import React, { useState, useEffect } from 'react';

const Publish = ({ checkedFields }) => {
  if (!checkedFields || Object.keys(checkedFields).length === 0) {
    return (
      <div className="text-center mt-4 text-gray-600">
        <p>No scheme published.</p>
      </div>
    );
  }

  const documents = Object.values(checkedFields);
  console.log(documents);

  const documentsToDisplay = documents.slice(1); // Exclude the 0th index value

  return (
    <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-4 m-4 max-w-sm">
      <h2 className="text-xl font-semibold mb-2">{documents[0]}</h2>
      {documentsToDisplay.length > 0 ? (
        <ul className="list-disc pl-5">
          {documentsToDisplay.map((document, index) => (
            <li key={index + 1}>{document}</li>
          ))}
        </ul>
      ) : (
        <p>No documents available.</p>
      )}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none">
        Apply
      </button>
    </div>
  );
};

export default Publish;
