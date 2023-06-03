

export const Summary = () => {
  return (
    <div>
        <div className='flex max-w-md w-full h-auto bg-slate-50  mt-4 space-x-15 shadow-sm shadow-slate-500'>

            <div className='justify-center mx-4 max-w-sm w-full mt-5 mb-5'>
                <p className='font-bold text-lg'>INCOME</p>
                <span className='font-semibold text-green-700'>$0.00</span>
            </div>

            <div className='bg-black h-16 w-1 my-3 mx-0 opacity-40' />

            <div className='justify-center mx-mx-5 max-w-sm w-full mt-5 mb-5'>
                <p className='font-bold text-lg'>EXPENSE</p>
                <span className='font-semibold text-orange-600'>$0.00</span>
            </div>

        </div>
    </div>
  )
}
