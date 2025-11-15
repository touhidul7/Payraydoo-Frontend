import React from "react";

export default function TextArea({
  id,
  label,
  onChange,
  value,
  placeholder,
  rows = 6,
}) {
  const classList = {
    label: "text-sm font-medium text-gray-900 block mb-2",
    textarea:
      "bg-gray-100 border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-4 placeholder-gray-400",
  };
  return (
    <>
      <label htmlFor={id} className={classList.label}>
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        onChange={onChange}
        value={value}
        className={classList.textarea}
        placeholder={placeholder}
      />
    </>
  );
}
