import React from "react";

function InputField(type, value, placeholder, onChange) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e)}
    />
  );
}

export default InputField;
