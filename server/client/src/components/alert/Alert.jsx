import React from "react";

const Alert = ({ msg }) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        color: "whitesmoke",
        width: "50%",
        padding: "5px",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      {msg}
    </div>
  );
};

export default Alert;
