import { useContext } from "react"
import { Context } from "../App"

export const Customizer = () => {
  const { length, setLength } = useContext(Context)
  return (
    <div className="flex gap-6">
      <h3 className="text-black">Passowrd Length</h3>
      <input
        className="text-black text-center border-2  bg-gray-100 w-32"
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        max={12}
        min={4}
      />
    </div>
  )
}
