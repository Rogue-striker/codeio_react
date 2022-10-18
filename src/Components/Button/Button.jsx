import React from 'react'

const Button = (props) => {
    const {handleClick, icon} = props
  return (
    <button onClick={handleClick} className="bg-purple rounded px-1">
    <img className='h-3 w-3' src={icon} alt="decrement button" />
  </button>
  )
}

export default Button