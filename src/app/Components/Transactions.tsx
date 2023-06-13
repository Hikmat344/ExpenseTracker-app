import React from 'react'



export const Transactions = () => {
    
  return (
    <div>
        
                <li className="flex border-r-4 justify-between border-r-green-700 items-center px-10 space-x-5 w-full h-12 bg-slate-50 hover:bg-green-700">
                    <p >income1</p>
                    <span >+$100</span>
                    
                </li>

                <li className="flex border-r-4 justify-between border-r-orange-600 items-center px-10 space-x-5 w-full h-12 bg-slate-50 hover:bg-orange-600">
                    <p >expense</p>
                    <span >+$50</span>
                </li>

                
        
    </div>
  )
}
