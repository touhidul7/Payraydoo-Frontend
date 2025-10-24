'use client';
import React from "react";

export default function ButtonAnimated({ content, onClick, href }) {
  const handleClick = (e) => {
    e.preventDefault();
    
    if (href) {
      window.location.href = href;
    } else if (onClick) {
      onClick();
    }else{
        window.location.replace("#");
    }
  };

  return (
    <button onClick={handleClick} className="custom-button">
      {content}
    </button>
  );
}