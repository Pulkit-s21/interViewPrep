import { useContext } from "react"
import { Context } from "../App"

export const Header = () => {
  const [darkMode] = useContext(Context)
  return (
    <>
      <h1 className={`${darkMode ? "text-white" : "text-black"}`}>
        Dark Mode Challenge
      </h1>
    </>
  )
}
