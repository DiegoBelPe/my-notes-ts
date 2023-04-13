import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const increment= (number : number):void => {
    setCount(count + number)
  }
  return (
    <div>
      <h3>Counter:useState</h3>
      <span>valor:{count}</span>
      <br />
      <button onClick={()=>increment(1)}>
        
        +1
      </button>
      <button onClick={()=>increment(2)}>
        
        +2
      </button>
      <button onClick={()=>setCount(0)}>
        
        Reset
      </button>

    </div>
  )
}
