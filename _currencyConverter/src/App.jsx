import "./App.css"
import { useState, createContext } from "react"
import { Title } from "./components/Title"
import { InfoArea } from "./components/InfoArea"
import { ConvertBtn } from "./components/ConvertBtn"
export const Context = createContext()

function App() {
  const API_KEY = "EUw7mfwo2AizJeXoTab8jl8hjwouraEQ"

  const convertMoney = async () => {
    const res = await fetch(
      `https://api.currencybeacon.com/v1/convert?api_key=${API_KEY}&from=${from}&to=${to}&amount=1`
    )
    const data = await res.json()
    setRate(data.value)
  }

  let [rate, setRate] = useState()
  let [amount, setAmount] = useState(1)
  let [from, setFrom] = useState()
  let [to, setTo] = useState()
  let [selected, setSelected] = useState("")

  return (
    <Context.Provider
      value={{
        to,
        setTo,
        from,
        setFrom,
        amount,
        setAmount,
        rate,
        setRate,
        convertMoney,
        selected,
        setSelected,
      }}
    >
      <div className="flex flex-col gap-6 items-center">
        <Title />
        <InfoArea />
        <ConvertBtn />
      </div>
    </Context.Provider>
  )
}

export default App
