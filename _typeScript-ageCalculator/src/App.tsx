import { useEffect, useState } from "react"
import Arrow from "./assets/Arrow.svg"

function App() {
  const [counter, setCounter] = useState<number>(0)
  const [date, setDate] = useState<string>("")
  const [month, setMonth] = useState<string>("")
  const [year, setYear] = useState<string>("")
  const [dayResult, setDayResult] = useState<number>()
  const [monthResult, setMonthResult] = useState<number>()
  const [yearResult, setYearResult] = useState<number>()

  const getDays = function (year: number, month: number) {
    return new Date(year, month, 0).getDate()
  }

  const calculateAge = () => {
    const today = new Date()
    const currentDate = today.getDate()
    const currentYear = today.getFullYear()
    const bmonth = parseFloat(month)
    const daysInMonth = getDays(currentYear, bmonth)
    if (currentYear < parseFloat(year)){
      alert("Please enter a valid DOB!!")
      setDate("")
      setMonth("")
      setYear("")
    } else {
      setDayResult(currentDate + daysInMonth * bmonth + parseFloat(date))
      setMonthResult(12 - bmonth)
      setYearResult(currentYear - parseFloat(year))
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
            className=" w-24 font-extrabold text-black p-2 bg-transparent border-[.5px] border-black"
            type="number"
            placeholder="Date"
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
            className=" w-24 font-extrabold text-black p-2 bg-transparent border-[.5px] border-black"
            type="number"
            placeholder="Month"
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
            className=" w-24 font-extrabold text-black p-2 bg-transparent border-[.5px] border-black"
            type="number"
            placeholder="Year"
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
          className=" bg-purple-600 rounded-full p-2 w-10"
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
