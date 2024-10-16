import React, { useId } from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(function Input(   //usinf forwardref hook to pass the refrence where this input will bw used
  { label,
    type = "text",
    className = "",
    ...props },
    ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block pl-1 mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

Input.propTypes = {
    label: PropTypes.string,  // The label prop should be a string
    type: PropTypes.oneOf(['text', 'email', 'password', 'number']),  // Restrict input types to these specific types
    className: PropTypes.string,  // className should be a string
    props: PropTypes.object,  // any additional props passed should be an object
  };

export default Input;
