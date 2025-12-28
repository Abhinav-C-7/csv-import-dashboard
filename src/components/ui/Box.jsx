const Box = ({
  children,
  padding = "none",
  background = "none",
  border = "none",
  rounded = "none",
  className = "",
}) => {
  const paddingStyles = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-12",
  };

  const backgroundStyles = {
    none: "",
    muted: "bg-gray-50",
    white: "bg-white",
  };

  const borderStyles = {
    none: "",
    default: "border border-gray-200",
  };

  const roundedStyles = {
    none: "",
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
  };

  return (
    <div
      className={`
        ${paddingStyles[padding]}
        ${backgroundStyles[background]}
        ${borderStyles[border]}
        ${roundedStyles[rounded]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Box;
