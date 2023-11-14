import { useContext } from "react"
import { Context } from "../App"

export const ClrOptions = () => {
  const {
    color,
    answers,
    setIsWrongSelection,
    setWrongCounter,
    generateColors,
    skipCounter,
    setSkipCounter,
  } = useContext(Context)
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
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
            <p className="font-semibold text-lg">{ans}</p>
          </button>
        ))}
      </div>
      <button
        disabled={skipCounter > 2}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
          setSkipCounter((prev) => prev + 1)
          generateColors()
        }}
      >
        Skip
      </button>
    </>
  )
}

export default ClrOptions
