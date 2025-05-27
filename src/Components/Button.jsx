import React from 'react'

const Button = ({count, setCount}) => {
  return (
    <>
    <button onClick={()=> setCount(count +1)}>Click Me Add</button>
    </>
  )
}

export default Button   