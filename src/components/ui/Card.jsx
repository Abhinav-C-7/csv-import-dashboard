import React from 'react'

const Card = (props) => {
  return (
    <div  className={`bg-gray-50 border border-gray-200 rounded-lg p-6 ${props.className}`}>{props.children}
      
    </div>
  )
}

export default Card
