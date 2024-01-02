import { useContext } from "react"
import { Context } from "../App"
import { twMerge } from "tailwind-merge"

export const ConvertedAmount = () => {
  const { amount, to, from, rate, selected } = useContext(Context)
  return (
    <div className="flex flex-col">
      <p className={twMerge("text-xl", rate ? "visible" : "hidden")}>
        <span className=" text-2xl lg:text-4xl text-orange-500">{amount}</span>{" "}
        {from} =
        <span className=" text-2xl lg:text-4xl text-purple-500">{` ${(
          amount * rate
        ).toFixed(2)}`}</span>{" "}
        {to}
      </p>
      <p className={twMerge("text-xl text-red-500")}>
        {selected}
      </p>
    </div>
  )
}
