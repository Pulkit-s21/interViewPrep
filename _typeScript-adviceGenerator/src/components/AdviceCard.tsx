"use Client"

import Divider from "../assets/Divider.svg"
import Dice from "../assets/Dice.svg"
import { useEffect, useState } from "react"

export const AdviceCard = () => {
  const [adviceId, setAdviceId] = useState<number>(1)
  const [counter, setCounter] = useState<number>(0)
  const [advice, setAdvice] = useState<string>("Roll the Dice to get free advice")

  useEffect(() => {
    const getAdvice = async (): Promise<void> => {
      const advice = await fetch(
        `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 225)}`
      )
      const data = await advice.json()
      setTimeout(() => {
        setAdviceId(data.slip.id)
        setAdvice(data.slip.advice)
      }, 1000)
    }
    getAdvice()
  }, [counter])

  return (
    <div className="p-8 grid grid-rows-4 gap-4 place-items-center rounded-md bg-background relative">
      <h3 className="text-emerald-300 uppercase">Advice #{adviceId}</h3>
      <p className="font-bold text-xl row-span-2 text-white max-w-sm">
        "{advice}"
      </p>
      <img src={Divider} alt="-------" />
      <img
        className="rounded-full bg-emerald-300 p-2 absolute -bottom-5 hover:rotate-180 transition-all cursor-pointer"
        src={Dice}
        alt="Smart Dice"
        onClick={() => {
          setAdvice("Loading")
          setCounter((prev) => prev + 1)
        }}
      />
    </div>
  )
}
