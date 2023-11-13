import { useState, useEffect, createContext } from "react"
import { AddressCard } from "./components/AddressCard"
export const Context = createContext()

function App() {
  let [counter, setCounter] = useState(0)
  let [addressData, setAddressData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://random-data-api.com/api/address/random_address?size=${counter}`
      )
      const data = await res.json()
      setAddressData(data)
    }
    fetchData()
  }, [counter])

  return (
    <Context.Provider value={{ addressData }}>
      <>
        <button onClick={() => setCounter((prev) => prev + 1)}>
          Increment
        </button>
        {counter}

        <AddressCard />
      </>
    </Context.Provider>
  )
}

export default App
