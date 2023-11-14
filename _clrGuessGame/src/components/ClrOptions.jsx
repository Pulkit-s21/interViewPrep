import { useContext } from "react"
import { Context } from "../App"

export const ClrOptions = () => {
  const {
    color,
    answers,
    setIsWrongSelection,
    setWrongCounter,
    generateColors,
  } = useContext(Context)
  return (
    <>
      <div className="flex gap-4">
        {answers.map((ans) => (
          <button
            className="border-2 border-gray-200 hover:border-blue-300"
            onClick={() => {
              if (ans === color) {
                setIsWrongSelection("Correct")
                setTimeout(() => {
                  generateColors()
                }, 1000)
              } else {
                setIsWrongSelection("Wrong Answer")
                setWrongCounter((prev) => prev + 1)
              }
            }}
            key={ans}
          >
            {ans}
          </button>
        ))}
      </div>
    </>
  )
}

export default ClrOptions
