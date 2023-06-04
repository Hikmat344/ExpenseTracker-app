
import React , {useContext , useReducer} from 'react'
import { createContext } from 'vm'
import Reducer from './Reducer';


const initialTransactions = [
  {amount: 50 , desc: "cash"},
  {amount: -650 , desc: "laptop"},
  {amount: -350 , desc: "books"}
]


//to access all components
export const TransactionContext = createContext(initialTransactions);



export const TransactionProvider = ({children})=>{
  let [state ,dispatch] = useReducer(Reducer , initialTransactions)

  function addTransaction(transObj){
    dispatch({
      type: "ADD",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc
      },

    })
  }
  return (
    <TransactionContext.provider value={{
      transactions: state,
      addTransaction
    }}>
      {children}
    </TransactionContext.provider>
  )
}