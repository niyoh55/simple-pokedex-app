import React from "react";

const TextInput = (props) => {
  const { title, onChange, value, placeholder } = props;
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{title}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default TextInput;
