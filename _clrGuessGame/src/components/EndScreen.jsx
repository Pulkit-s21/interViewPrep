import { useContext } from "react"
import { Context } from "../App"

export const EndScreen = () => {
  const { setWrongCounter, generateColors } = useContext(Context)
  return (
    <>
      <p>You guessed the colors wrong 3 times.. Better luck next time</p>
      <button
        onClick={() => {
          setWrongCounter(0)
          generateColors()
        }}
      >
        Restart
      </button>
    </>
  )
}

export default EndScreen
