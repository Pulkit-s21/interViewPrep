import { useState, useEffect } from "react"

function App() {
  let [counter, setCounter] = useState(0)
  let [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    if (timeLeft <= 0) return
    const timeOut = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearTimeout(timeOut)
  }, [timeLeft])

  return (
    <div className="flex flex-col gap-4">
      <button
        disabled={timeLeft <= 0}
        className="flex flex-col gap-4 px-4 disabled:cursor-not-allowed disabled:opacity-80"
        onClick={() => {
          setCounter((prev) => prev + 1)
        }}
      >
        <p>Pressed <span className="text-4xl font-semibold text-blue-400">{counter}</span> times</p>
        <p>Time Left : {timeLeft} secs</p>
      </button>

      <div className="flex gap-4">
        <button
          onClick={() => {
            setTimeLeft(10)
            setCounter(0)
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            setTimeLeft(0)
            setTimeout(() => {
              setCounter(0)
            }, 1000)
          }}
        >
          Stop
        </button>
      </div>
    </div>
  )
}

export default App
