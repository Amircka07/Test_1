import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, children, variant = "primary" }) => {
  const buttonClass =
    variant === "danger" ? styles.buttonDanger : styles.buttonPrimary;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
