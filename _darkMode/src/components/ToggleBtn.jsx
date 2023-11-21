import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { Context } from "../App"

export const ToggleBtn = () => {
  const [darkMode, setDarkMode] = useContext(Context)
  return (
    <>
      {darkMode ? (
        <FontAwesomeIcon
          className="cursor-pointer"
          onClick={() => {
            setDarkMode(!darkMode)
          }}
          icon={faSun}
        />
      ) : (
        <FontAwesomeIcon
          className="cursor-pointer"
          onClick={() => {
            setDarkMode(!darkMode)
          }}
          icon={faMoon}
        />
      )}
    </>
  )
}
