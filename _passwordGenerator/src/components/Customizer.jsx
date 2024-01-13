import { useContext } from "react"
import { Context } from "../App"

export const Customizer = () => {
  const { length, setLength } = useContext(Context)
  return (
    <div className="flex gap-6 text-white">
      <h3 className="">Passowrd Length</h3>
      <input
        className="text-center border-2 text-black outline-none bg-gray-100 w-32"
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        max={12}
        min={4}
      />
    </div>
  )
}
