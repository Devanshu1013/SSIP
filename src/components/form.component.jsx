import React, { useState } from 'react';
import Publish from './publish.component';

const Form = () => {
  const initialFormState = {
    schemeName: '', // Initialize schemeName
    name: false,
    aadhar: false,
    pan: false,
    income: false,
    address: false,
  };

  const [formState, setFormState] = useState(initialFormState);
  const [checkedFields, setCheckedFields] = useState({});

  const formFields = [
    { id: 'name', label: 'Name' },
    { id: 'aadhar', label: 'Aadhar Card' },
    { id: 'pan', label: 'PAN Card' },
    { id: 'income', label: 'Income Certificate' },
    { id: 'address', label: 'Address Proof' },
  ];

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setFormState({ ...formState, [id]: checked });
  };

  const handleSchemeNameChange = (event) => {
    const schemeName = event.target.value;
    setFormState({ ...formState, schemeName });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedCheckedFields = { schemeName: formState.schemeName };
    formFields.forEach((field) => {
      if (formState[field.id]) {
        updatedCheckedFields[field.id] = field.label;
      }
    });
    setCheckedFields(updatedCheckedFields); // Update the checkedFields in this component
  };
  
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-4">Docs</h2>
        {/* Input field for Scheme Name */}
        <div className="form-group">
          <label htmlFor="schemeName">Scheme Name</label>
          <input
            type="text"
            id="schemeName"
            className="form-control"
            value={formState.schemeName}
            onChange={handleSchemeNameChange}
          />
        </div>
        {formFields.map((field) => (
          <div className="custom-control custom-checkbox" key={field.id}>
            <input
              type="checkbox"
              className="custom-control-input"
              id={field.id}
              checked={formState[field.id]}
              onChange={handleCheckboxChange}
            />
            <label className="custom-control-label" htmlFor={field.id}>
              {field.label}
            </label>
          </div>
        ))}
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
      <Publish checkedFields={checkedFields} /> {/* Pass updated checkedFields to the Publish component */}
    </div>
  );
};

export default Form;
