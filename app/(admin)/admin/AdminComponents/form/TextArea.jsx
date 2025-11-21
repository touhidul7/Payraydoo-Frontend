import React from "react";

export default function TextArea({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
  required = false,
  disabled = false,
}) {
  const classList = {
    label: "text-sm font-medium text-gray-900 block mb-2",
    textarea:
      "bg-gray-100 border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-4 placeholder-gray-400",
  };
  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
            w-full px-3 py-2 border border-gray-300 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200 resize-vertical
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${disabled ? "text-gray-500" : "text-gray-900"}
          `}
      />
    </div>
  );
}


