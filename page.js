
"use client"

import { useState } from 'react';

export default function Counter() {

 
  const [count, setCount] = useState(0);
    
    const increase = () => {setCount(count + 1);}
    const Decrease = () => {setCount(count - 1);}
    const reset = () => {setCount(0);}
    


  return (
    <div className='flex flex-col items-center justify-center flex-1 px-2 text-center border-2 py-2'>
      <h1 className='text-3xl text-blue-300'>Simple Counter</h1>
      <h2 className='text-4xl'>{count}</h2>
      <div className='flex-row'>      
      <button onClick={increase}className='border-2 text-green-500 px-4'>Increase</button>
      <button onClick={Decrease} style={{ marginLeft: '10px' }}className='border-2 text-red-500 px-4'>Decrease</button>
      <button onClick={reset}className='text-yellow-400 rounded border-2'>reset

      </button>
    </div>
    </div>
  );
}

