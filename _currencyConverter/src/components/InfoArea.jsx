import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { Context } from "../App"
import { Dropdown } from "./Dropdown"

export const InfoArea = () => {
  const { to, setTo, from, setFrom, amount, setAmount } = useContext(Context)
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-green-500 text-xl">Amount</h2>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="border-2 text-lg rounded-md text-center"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">From</h2>
          <Dropdown action={setFrom} />
        </div>

        <FontAwesomeIcon
          className=" bg-orange-600 text-xl md:text-2xl lg:text-3xl rounded-full p-3 cursor-pointer hover:rotate-180 duration-300"
          onClick={() => {
            const temp = from
            setFrom(to)
            setTo(temp)
          }}
          icon={faArrowRightArrowLeft}
        />

        <div className="flex flex-col gap-2">
          <h2 className="text-xl">To</h2>
          <Dropdown action={setTo} />
        </div>
      </div>
    </div>
  )
}
