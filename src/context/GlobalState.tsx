
import React , {useContext , useReducer} from 'react'
import { createContext } from 'vm'


const initialTransactions = [
  {amount: 50 , desc: "cash"},
  {amount: -650 , desc: "laptop"},
  {amount: -350 , desc: "books"}
]


//to access all components
export const TransactionContext = createContext(initialTransactions);


