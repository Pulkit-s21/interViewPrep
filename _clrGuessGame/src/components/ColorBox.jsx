import { useContext } from "react"
import { Context } from "../App"

export const ColorBox = () => {
  const { color } = useContext(Context)
  return (
    <div className="p-12" style={{ background: color }}>
      <p className="text-2xl font-semibold text-black">Which Color I am</p>
    </div>
  )
}
