import { useState, createContext } from "react"
import { Header } from "./components/Header"
import { ToggleBtn } from "./components/ToggleBtn"
export const Context = createContext()

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <Context.Provider value={[darkMode, setDarkMode]}>
      <Header />
      <ToggleBtn />
    </Context.Provider>
  )
}

export default App
