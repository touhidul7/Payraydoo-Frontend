"use client";
import React from "react";

export default function ButtonAnimated({
  content,
  onClick,
  href,
  dark = true,
}) {
  const handleClick = (e) => {
    e.preventDefault();

    if (href) {
      window.location.href = href;
    } else if (onClick) {
      onClick();
    } else {
      window.location.replace("#");
    }
  };

  return dark ? (
    <button onClick={handleClick} className="custom-button-dark">
      {content}
    </button>
  ) : (
    <button onClick={handleClick} className="custom-button-light">
      <span className="gradient-text">{content}</span>
    </button>
  );
}
