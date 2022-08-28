import React from "react";

export default function useForm({
  initialValues,
  validate,
  onSubmit,
  onChangeError,
}) {
  const [fields] = React.useState(new Set(Object.keys(initialValues)));
  const [formData, setFormData] = React.useState(initialValues);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState(
    Object.keys(initialValues).reduce(
      (prev, val) => ({ ...prev, [val]: null }),
      {}
    )
  );

  const hasError = (err = errors) => Object.entries(err).some(([, val]) => val);

  const onChange = async (fieldName, e) => {
    setErrors({});
    const newData = { ...formData, [fieldName]: e.target.value };
    if (typeof validate === "function") {
      const validationErrors = await validate(newData);
      if (hasError(validationErrors)) setErrors(validationErrors);
    }
    setFormData(newData);
    if (typeof onChangeError === "function") onChangeError(errors);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    onSubmit(formData);
  }

  return {
    fields,
    errors,
    formData,
    onChange,
    isSubmitting,
    handleSubmit,
  };
}
