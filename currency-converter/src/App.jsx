import { useState } from 'react'
import { Inputbox } from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import bgImage from './assets/bg.jpg';

function App() {

  const [amount, setamount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTO] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyinfo = useCurrencyinfo(from)

  const options = Object.keys(currencyinfo)

  const swap = () => {
    setFrom(to)
    setTO(from)
    setamount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyinfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat min-h-screen' style={{
      backgroundImage: `url(${bgImage})`
    }}
    >
      <div className='w-full m-5'>
        <div className='w-full max-w-md mx-auto border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            <div className='w-full mb-1'>
              <Inputbox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setamount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-700  text-white px-2 py-0.5'
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <Inputbox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTO(currency)}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>

            <button type="submit" className="w-full text-white px-4 py-3 rounded-lg bg-gradient-to-r from-blue-700 to bg-purple-600" >
              Convert {typeof from === "string" && from.toUpperCase()} to {typeof to === "string" && to.toUpperCase()}
            </button>

          </form>
        </div>
      </div>
    </div>

  )
}

export default App
