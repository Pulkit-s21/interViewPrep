import { useContext } from "react"
import { Context } from "../App"

export const Options = () => {
  const {
    lowercase,
    setLowercase,
    uppercase,
    setUppercase,
    symbols,
    setSymbols,
    numbers,
    setNumbers,
  } = useContext(Context)
  return (
    <div className="flex gap-4 text-black">
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={lowercase}
          onClick={() => setLowercase(!lowercase)}
          id="Lowercase"
        />
        <label htmlFor="Lowercase">Lowercase</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={uppercase}
          onClick={() => setUppercase(!uppercase)}
          id="Uppercase"
        />
        <label htmlFor="Uppercase">Uppercase</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={symbols}
          onClick={() => setSymbols(!symbols)}
          id="Symbols"
        />
        <label htmlFor="Symbols">Symbols</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={numbers}
          onClick={() => setNumbers(!numbers)}
          id="Numbers"
        />
        <label htmlFor="Numbers">Numbers</label>
      </div>
    </div>
  )
}
