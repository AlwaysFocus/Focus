import React from "react";
import './Input.css'

const Input = (props) => {
  const { variant = "small", children, ...rest } = props;
  return (
    <input className={`input ${variant}`} {...rest}>
      {children}
    </input>
  );
};

export default Input;
