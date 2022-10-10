import "./GInput.scss";

export default function GInput({
  id,
  label,
  type = "text",
  setValue,
  value,
  pattern = "[A-Za-z0-9_ ]+",
}) {
  return (
    <div className="GInputWrapper">
      <input
        id={id}
        required
        onChange={(e) => setValue(e)}
        type={type}
        placeholder=" "
        defaultValue={value}
        pattern={pattern}
        autoComplete="off"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
