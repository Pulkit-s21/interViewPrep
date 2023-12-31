import { createContext, useEffect, useState } from "react"
import { ColorBox } from "./components/ColorBox"
import { ClrOptions } from "./components/ClrOptions"
import { EndScreen } from "./components/EndScreen"
export const Context = createContext()

const getRandomColor = () => {
  const digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ]

  const color = new Array(6)
    .fill("")
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join("")

  return `#${color}`
}

function App() {
  let [color, setColor] = useState()
  const [isWrongSelection, setIsWrongSelection] = useState("")
  const [answers, setAnswers] = useState([])

  let [wrongCounter, setWrongCounter] = useState(0)
  let [skipCounter, setSkipCounter] = useState(0)

  const generateColors = () => {
    const actualAnswer = getRandomColor()
    setColor(actualAnswer)
    setAnswers(
      [actualAnswer, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    )
    setIsWrongSelection("")
  }

  useEffect(() => {
    generateColors()
  }, [])

  return (
    <Context.Provider
      value={{
        color,
        answers,
        setIsWrongSelection,
        setWrongCounter,
        generateColors,
        skipCounter,
        setSkipCounter,
      }}
    >
      <div className="flex flex-col items-center gap-8">
        {wrongCounter < 3 ? (
          <>
            <ColorBox />
            <ClrOptions />
            {isWrongSelection}
            <p className="text-lg">
              <span className="font-bold text-xl"> {3 - skipCounter} </span>
              skips left
            </p>
            <p className="text-lg">
              You have
              <span className="font-bold text-xl"> {3 - wrongCounter} </span>
              chances left
            </p>
          </>
        ) : (
          <>
            <EndScreen />
          </>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
