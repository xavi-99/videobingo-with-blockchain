import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  classList: string;
  disabled?: boolean;
  value: string;
  onClick?: () => void;
};
const Button = ({
  classList,
  disabled = false,
  value,
  onClick,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      {...props}
      className={classList}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
