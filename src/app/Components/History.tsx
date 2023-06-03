

export const History = () => {
  return (
    <div>
         
        <div className='mt-4 '>
            <p className='text-lg font-semibold mt-8'>Transaction History</p>
            <div className='bg-black px-5 w-full h-0.5 opacity-30 mt-2' />

            <ul className="mt-3 space-y-3">
                <li className="flex border-r-4 justify-between border-r-green-700 items-center px-10 space-x-5 w-full h-12 bg-slate-50 hover:bg-green-700">
                    <p >income1</p>
                    <span >+$100</span>
                </li>

                <li className="flex border-r-4 justify-between border-r-orange-600 items-center px-10 space-x-5 w-full h-12 bg-slate-50 hover:bg-orange-600">
                    <p >expense</p>
                    <span >+$100</span>
                </li>

                
            </ul>

        </div>
    </div>
  )
}
