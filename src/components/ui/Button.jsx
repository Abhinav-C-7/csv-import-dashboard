const Button = (props) => {
  const variants = {
    primary: "bg-blue-500 text-white hover cursor-pointer hover:bg-blue-400",
    secondary:
      "bg-gray-100 text-gray-700 cursor-pointer hover:bg-gray-50 border",
  };

  return (
    <div>
      <button
        className={`${
          variants[props.variant]
        } w-56 h-16 rounded-2xl py-4 text-sm`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
