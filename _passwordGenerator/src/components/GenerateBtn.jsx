import { useContext } from "react"
import { Context } from "../App"

export const GenerateBtn = () => {
  const { generatePassword } = useContext(Context)
  return (
    <button className="rounded-lg" onClick={generatePassword}>
      Generate Password
    </button>
  )
}
