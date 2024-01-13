import "./App.css"
import { useState, createContext } from "react"
import { Title } from "./components/Title"
import { Customizer } from "./components/Customizer"
import { Options } from "./components/Options"
import { GenerateBtn } from "./components/GenerateBtn"
import { GenerationArea } from "./components/GenerationArea"
export const Context = createContext()

function App() {
  let [password, setPassword] = useState("")
  let [success, setSuccess] = useState("")
  let [length, setLength] = useState(12)
  let [lowercase, setLowercase] = useState(true)
  let [uppercase, setUppercase] = useState(true)
  let [symbols, setSymbols] = useState(true)
  let [numbers, setNumbers] = useState(true)

  const generatePassword = () => {
    let charset = ""
    let newPassword = ""

    if (symbols) {
      charset += "!@#$%^&*"
    }
    if (numbers) {
      charset += "1234567890"
    }
    if (lowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz"
    }
    if (uppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(newPassword)
  }

  return (
    <Context.Provider
      value={{
        success,
        setSuccess,
        length,
        setLength,
        lowercase,
        setLowercase,
        uppercase,
        setUppercase,
        symbols,
        setSymbols,
        numbers,
        setNumbers,
        password,
        generatePassword,
      }}
    >
      <div className="flex items-center flex-col gap-6 rounded-xl bg-black text-white p-8">
        <Title />
        <Customizer />
        <Options />
        <GenerateBtn />
        <GenerationArea />
      </div>
    </Context.Provider>
  )
}

export default App
