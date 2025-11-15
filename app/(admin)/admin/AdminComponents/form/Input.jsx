import React from "react";

export default function Input({ id, label, onChange, value, placeholder, type="text" }) {
  const classList = {
    label: "text-sm font-medium text-gray-900 block mb-2",
    input:
      "shadow-sm bg-gray-100 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5",
  };
  return (
    <>
      <label htmlFor={id} className={classList.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={classList.input}
      />
    </>
  );
}
