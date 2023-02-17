import React from 'react'

function Button({children,handlerFunction}) {
  return (
    <button
            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            id="increment"
            onClick={handlerFunction}
          > 
            {children}
          </button>
  )
}

export default Button