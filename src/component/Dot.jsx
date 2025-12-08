import React from 'react'

const Dot = ({className}) => {
  return (
     <div className={`w-[15px] h-[15px] rounded-[50%]  animate-dot ${className}`}></div>
  )
}

export default Dot