
const Button = (props) => {
      const variants = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-200 text-black",
  }


  return (
    <div>
      <button className={`${variants[props.variant]} w-56 h-16 rounded-2xl py-4 text-sm`} onClick={props.onClick}>{props.children}</button>
    </div>
  )



  
}

export default Button
