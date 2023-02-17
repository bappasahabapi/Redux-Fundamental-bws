import React from 'react'

function Summation({count}) {
  return (
    <div class="max-w-md mx-auto mt-10 space-y-5">
      <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <h1 class="text-2xl font-semibold">Total Count: {count}</h1> 
      </div>
    </div>
  )
}

export default Summation