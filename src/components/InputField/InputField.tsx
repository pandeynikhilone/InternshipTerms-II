import React, { useState } from "react";
import type { InputFieldProps } from "./InputField.types";

const InputField: React.FC<InputFieldProps> = ({
  value = "",
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // size styles
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  // variant styles
  const variantClasses = {
    outlined: "border border-gray-400 rounded",
    filled: "bg-gray-100 border border-gray-300 rounded",
    ghost: "border-b border-gray-400 bg-transparent",
  };

  const isPasswordField = label?.toLowerCase().includes("password");
  const inputType = isPasswordField && !showPassword ? "password" : "text";

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative w-full">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full pr-10
            ${sizeClasses[size]}
            ${variantClasses[variant]}
            ${invalid ? "border-red-500" : ""}
            disabled:bg-gray-200 disabled:cursor-not-allowed
            focus:outline-none focus:ring-2 focus:ring-blue-500
          `}
        />

        {/* Clear button */}
        {value && !disabled && (
          <button
            type="button"
            onClick={() =>
              onChange?.({
                target: { value: "" },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
          >
            ❌
          </button>
        )}

        {/* Password toggle */}
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        )}
      </div>

      {helperText && !invalid && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
      {invalid && errorMessage && (
        <p className="mt-1 text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputField;
