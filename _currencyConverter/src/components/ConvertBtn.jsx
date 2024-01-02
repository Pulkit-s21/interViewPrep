/* eslint-disable no-undef */
import { useContext } from "react"
import { Context } from "../App"
import { ConvertedAmount } from "../components/ConvertedAmount"
import { twMerge } from "tailwind-merge"

export const ConvertBtn = () => {
  const { convertMoney, from, to, setSelected } = useContext(Context)
  return (
    <>
      <button
        className={twMerge("bg-blue-600 hover:scale-110 transition-all")}
        onClick={() => {
          convertMoney()
          if (!from || !to) {
            setSelected("Please select the currencies")
            setTimeout(() => {
              setSelected("")
            }, 2000)
          }
        }}
      >
        Convert
      </button>
      <ConvertedAmount />
    </>
  )
}
