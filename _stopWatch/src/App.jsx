import { useEffect, useState, useRef } from "react"

function App() {
  let [count, setCount] = useState(0)
  let time = useRef()

  const handleTime = () => {
    time.current = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
  }

  useEffect(() => {
    return () => clearInterval(time.current)
  }, [])
  return (
    <>
      {count}
      <div>
        <button onClick={() => handleTime()}>Start</button>
        <button onClick={() => clearInterval(time.current)}>Pause</button>
        <button onClick={() => setCount(0)}>Restart</button>
      </div>
    </>
  )
}

export default App
