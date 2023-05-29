import React from "react";
import './Button.scss';

export const Button = ({ type, className, onClick, children }) => {
  if (type === 'submit') {
    return (
      <button type="submit" className={className}>
        {children}
      </button>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};