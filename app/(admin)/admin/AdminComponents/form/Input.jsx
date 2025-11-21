export default function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
}) {
  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
            w-full px-3 py-2 border border-gray-300 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${disabled ? "text-gray-500" : "text-gray-900"}
          `}
      />
    </div>
  );
}

/* import React from "react";

export default function Input({ id, label, onChange, value, placeholder, type="text" }) {
  const classList = {
    label: "text-sm font-medium text-gray-900 block mb-2",
    input:
      "shadow-sm bg-gray-100 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5",
  };
  return (
    <div>
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
    </div>
  );
}
 */
