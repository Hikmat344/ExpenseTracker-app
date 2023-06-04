
import { Balance } from './Components/Balance';
import { Summary } from './Components/Summary';
import { History } from './Components/History';
import { Addtransaction } from './Components/Addtransaction'



export default function Home() {
  return (
  
    <main className='flex justify-center items-center bg-white h-screen'>
      <div className=' w-full max-w-md px-5 py-2 shadow-md shadow-gray-500 items-center justify-center text-center'>
       <Balance />
       <Summary />
       <History />
       <Addtransaction />

        
      </div>
    </main>
   
  )
}
