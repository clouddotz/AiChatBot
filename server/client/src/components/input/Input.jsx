import React from "react";

const Input = ({ type, name, id, placeholder, value, onChange }) => {
  return (
    <>
      <div id="input-Container">
        <label className="input-label" htmlFor={id}>
          {id}:{" "}
        </label>

        <input
          className="input-input"
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
