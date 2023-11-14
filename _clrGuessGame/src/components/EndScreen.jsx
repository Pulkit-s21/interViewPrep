import { useContext } from "react"
import { Context } from "../App"

export const EndScreen = () => {
  const { setWrongCounter, setSkipCounter, generateColors } =
    useContext(Context)
  return (
    <>
      <p className="text-center font-bold text-lg lg:text-3xl">
        You guessed the colors wrong 3 times... Better luck next time
      </p>
      <button
        onClick={() => {
          setWrongCounter(0)
          setSkipCounter(0)
          generateColors()
        }}
      >
        Restart
      </button>
    </>
  )
}

export default EndScreen
