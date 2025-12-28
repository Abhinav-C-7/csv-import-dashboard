import React from 'react'

const Text = (props) => {
  const variants = {
  title: "text-6xl font-bold text-gray-900",
  subtitle: "text-xl font-medium text-gray-900",
  body: "text-sm text-gray-700",
  muted: "text-sm text-gray-600",
}

  return (
    <div className={`${variants[props.variant]}`}>
        {props.children}
      
    </div>
  )
}

export default Text
