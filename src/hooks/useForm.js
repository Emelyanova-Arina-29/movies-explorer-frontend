import React from "react";

export function useForm() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    
    const name = event.target.name;
    const value = event.target.value;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: event.target.validationMessage,
    });

    setIsValid(event.target.closest("#form").checkValidity());
  };

  return {
    values,
    setValues,
    handleChange,
    isValid,
    setIsValid,
    errors,
    setErrors,
  };
}

export default useForm;
