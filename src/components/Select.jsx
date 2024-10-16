import React, { useId } from "react";
import PropTypes from "prop-types";

const Select = React.forwardRef(
  ({ options, label, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label className="" htmlFor={id}>
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          {...props}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
          {options?.map(
            (
              option // Optional chaining to handle cases where options might be undefined
            ) => (
              <option key={option} value={option}>
                {option}
              </option>
            )
          )}
        </select>
      </div>
    );
  }
);

// Set display name for debugging
Select.displayName = "Select";

// Move propTypes and defaultProps outside of the component function
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired, // options must be an array of strings and required
  label: PropTypes.string, // label is optional but should be a string
  className: PropTypes.string, // className is a string, but optional
  // any additional props passed should be an object
};

export default Select;
