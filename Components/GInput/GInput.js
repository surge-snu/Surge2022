import "./GInput.scss";

export default function GInput({
  id,
  label,
  type = "text",
  setValue,
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
        pattern={pattern}
        autoComplete="off"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
