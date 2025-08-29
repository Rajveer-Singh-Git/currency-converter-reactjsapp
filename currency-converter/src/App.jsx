import { useState } from 'react'
import {Inputbox} from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {
  
  const [amount, setamount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTO] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyinfo = useCurrencyinfo(from)

  return (
    <>
     
    </>
  )
}

export default App
