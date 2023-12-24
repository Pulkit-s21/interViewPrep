import { useEffect, useState } from "react"
import Arrow from "./assets/Arrow.svg"

function App() {
  const [date, setDate] = useState<string>("")
  const [month, setMonth] = useState<string>("")
  const [year, setYear] = useState<string>("")
  const [counter, setCounter] = useState<number>(0)
  const [dayResult, setDayResult] = useState<number>(0)
  const [monthResult, setMonthResult] = useState<number>(0)
  const [yearResult, setYearResult] = useState<number>(0)

  const calculateAge = () => {
    const today = new Date()
    const currentYear = today.getFullYear()

    if (currentYear < parseFloat(year)) {
      alert("Please enter a valid DOB!!")
      setDate("")
      setMonth("")
      setYear("")
    } else {
      // making a date with the info entered by the user
      const birthDay = new Date(
        parseInt(year),
        parseInt(month) - 1, // need -1 bcz the months start from 0..so 12 becomes Jan again
        parseInt(date)
      )
      setYearResult(today.getFullYear() - birthDay.getFullYear())
      setMonthResult(today.getMonth() - birthDay.getMonth())
      setDayResult(today.getDate() - birthDay.getDate())
    }
  }
  useEffect(() => {
    calculateAge()
  }, [counter])

  return (
    <div className="bg-white grid grid-rows-2 gap-2 rounded-br-[100px] p-4">
      {/* Input area */}
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col text-left">
          <p className=" text-black">Days</p>
          <input
            className=" w-24 font-extrabold text-black p-2 bg-transparent border-[.5px] border-black placeholder:text-gray-300"
            type="number"
            placeholder="DD"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min="1"
            max="31"
            required
          />
        </div>
        <div className="flex flex-col text-left">
          <p className=" text-black">Month</p>
          <input
            className=" w-24 font-extrabold text-black p-2 bg-transparent border-[.5px] border-black placeholder:text-gray-300"
            type="number"
            placeholder="MM"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            min="1"
            max="12"
            required
          />
        </div>
        <div className="flex flex-col text-left">
          <p className=" text-black">Year</p>
          <input
            className=" w-24 font-extrabold text-black p-2 bg-transparent border-[.5px] border-black placeholder:text-gray-300"
            type="number"
            placeholder="YYYY"
            value={year}
            min="1900"
            max={new Date().getFullYear()}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
      </div>

      {/* image */}
      <div className="flex flex-col items-end">
        <img
          className="bg-purple-600 cursor-pointer hover:opacity-70 rounded-full p-2 w-10 rotate-180 hover:rotate-0 duration-300 transition-all"
          src={Arrow}
          alt="Arrow"
          onClick={() => {
            setCounter((prev) => prev + 1)
          }}
        />
      </div>

      {/* display area */}
      <div className="flex flex-col gap-2 text-left text-black italic font-extrabold text-5xl">
        <h3>
          <span className="text-purple-500">
            {yearResult ? `${yearResult}` : "---"}
          </span>{" "}
          years
        </h3>
        <h3>
          <span className="text-purple-500">
            {monthResult ? `${monthResult}` : "---"}
          </span>{" "}
          months
        </h3>
        <h3>
          <span className="text-purple-500">
            {dayResult ? `${dayResult}` : "---"}
          </span>{" "}
          days
        </h3>
      </div>
    </div>
  )
}

export default App
