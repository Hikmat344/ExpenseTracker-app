'use client'
import { useState } from "react"

export const Addtransaction = () => {
    const [amount, setamount] = useState( '');
    const [description, setdiscription] = useState( ()=> '');

  
  return (
    <div>
        
        <div className='mt-4 '>
            <p className='text-lg font-semibold mt-8'>Add New Transaction</p>
            <div className='bg-black px-8 w-full h-0.5 opacity-30 mt-2' />

            <label className='flex mx-2 mt-6 text-lg font-semibold justify-start'>Description</label>
            <input className='w-full px-2 h-10 mt-2 bg-slate-100 border-2 border-gray-200 rounded-md' onChange={(e)=> setdiscription(e.target.value)} value={description} type='text' placeholder='Detail of Transaction '></input>

            <label className='flex mx-2 mt-3 text-lg font-semibold justify-start'>Transaction Amount</label>
            <input className='w-full px-2 h-10 mt-2 bg-slate-100 border-2 border-gray-200 rounded-md' onChange={(e)=> setamount(e.target.value)} value={amount} type='number' placeholder='Transaction value in Dollars '></input>
            <button type='submit' className='items-center bg-blue-600 text-white w-full h-12 mt-3'>Add</button>
            <p className='flex mt-2 justify-end px-2'>Created by. <a className='text-blue-600 ' href='https://hikmeedev.vercel.app/'>Hikmat</a></p>

        </div>
    </div>
  )
}
