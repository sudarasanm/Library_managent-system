import React, { useState, useRef } from 'react'
import styles from "./form.module.css"
import SubmitButton from 'components/button/Button';

function Form({ fields, onSubmit }) {
  const [formData, setFormData] = useState({});
  const [department, setdepartment] = useState()
  const departmentRef = useRef();

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    // Clear the error message when the user types in a field
    setFormErrors({
      ...formErrors,
      [event.target.name]: "",
    });
  };
  const departmenthandler = (e) => {
    setdepartment(e.target.value)
    console.log(department, "ssss");
    console.log(Department, "sa")
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form fields
    let errors = {};
    let isValid = true;

    fields.forEach((field) => {
      console.log(field.name);
      if (!formData[field.name]) {
        errors[field.name] = `${field.label} is required`;
        isValid = false;
      }

      if (field.type === "email" && !isValidEmail(formData[field.name])) {
        errors[field.name] = "Invalid email address";
        isValid = false;
      }
    });

    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    onSubmit(formData);
    setFormData({});
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <form className={styles.formcontainer} onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className={styles.DynamicFormfield}>
          <label htmlFor={field.label} >{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            id={field.label}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className={styles.DynamicForminput}
            placeholder={field.placeholder}
          />
          {formErrors[field.name] && (
            <span className={styles.DynamicFormerror}>
              {formErrors[field.name]}
            </span>
          )}
        </div>
      ))}
      <label className={styles.label} htmlFor="">Select the department</label>
      <select className={styles.dropdown} onChange={departmenthandler}>
        <option>Select Department</option>
        <option value="IT">Information Technology</option>
        <option value="Business">Computer Science</option>
        <option value="">Science</option>
        <option value="">Comsics</option>
        <option value="">Drama</option>
        <option value="">Maths</option>
      </select>
      <SubmitButton type={"submit"} />
    </form>
  );
}

export default Form
