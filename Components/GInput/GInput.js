import "./GInput.scss";

export default function GInput({
  id,
  label,
  type = "text",
  setValue,
  value,
  pattern = "[A-Za-z0-9_ ]+",
  bgColor = "#1d2b49",
  ...props
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
        style={{
          "--GInput-BG": bgColor,
        }}
        {...props}
      />
      <label
        htmlFor={id}
        style={{
          "--GInput-BG": bgColor,
        }}
      >
        {label}
      </label>
    </div>
  );
}
