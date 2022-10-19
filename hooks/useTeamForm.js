import { useState } from "react";

export default function useTeamForm({
  initialValues,
  validate,
  onSubmit,
  onChangeError,
  eventId,
}) {
  const [fields] = useState(new Set(Object.keys(initialValues)));
  const [formData, setFormData] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(
    Object.keys(initialValues).reduce(
      (prev, val) => ({ ...prev, [val]: {} }),
      {}
    )
  );

  const addPlayer = () => {
		const newPlayer = {
			"id": formData[formData.length - 1]["id"] + 1,
      [`PlayerName`]: "",
      [`PlayerEmail`]: "",
      [`PlayerPhone`]: "",
      [`PlayerID`]: "",
      eventId: eventId,
      playerType: "ADDITIONAL",
    };
    setFormData([...formData, newPlayer]);
  };

  const removePlayer = (index) => {
    const newFormData = formData.filter((item, i) => i !== index);
    delete errors[index];

    setErrors(errors);
    setFormData(newFormData);
  };

  const hasError = (err = errors) =>
    Object.values(err).some((item) => Object.keys(item).length !== 0);

  const onChange = async (fieldName, e, index) => {
    setErrors({});
    // const newData = { ...formData, [fieldName]: e.target.value };
    const newData = formData.map((item, i) => {
      if (i === index) {
        return { ...item, [fieldName]: e.target.value };
      }
      return item;
    });
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
    addPlayer,
    removePlayer,
  };
}
