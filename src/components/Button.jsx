import PropTypes from 'prop-types';
function Button({
  children,
  className = "",
  type = "button",
  textColor = "white",
  bgColor = "bg-blue-600",
  ...props
}) {
  return (
    <button
    type={type}
      className={`px-4 py-2 rounded-lg ${textColor} ${bgColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
    children: PropTypes.node.isRequired,  // Ensures children are passed (node can be anything renderable)
    className: PropTypes.string,  // className should be a string
    type: PropTypes.oneOf(['button', 'submit', 'reset']),  // restricts type to specific button types
    textColor: PropTypes.string,  // textColor should be a string
    bgColor: PropTypes.string,  // bgColor should be a string
  };

export default Button;
