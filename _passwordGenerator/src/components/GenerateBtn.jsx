import { useContext, useEffect, useRef } from "react"
import { Context } from "../App"

export const GenerateBtn = () => {
  const btnRef = useRef(null)
  const spanRef = useRef(null)

  useEffect(() => {
    const spanCurrent = spanRef.current

    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect()
      const offset = e.offsetX
      const left = `${(offset / width) * 100}%`
      spanCurrent.animate({ left }, { duration: 250, fill: "forwards" })
    }

    const handleMouseLeave = () => {
      spanCurrent.animate({ left: "50%" }, { duration: 200, fill: "forwards" })
    }

    const btnCurrent = btnRef.current
    btnCurrent.addEventListener("mousemove", handleMouseMove)
    btnCurrent.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      btnCurrent.removeEventListener("mousemove", handleMouseMove)
      btnCurrent.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const { generatePassword } = useContext(Context)
  return (
    <button
      ref={btnRef}
      className="rounded-lg relative overflow-hidden px-4 py-3 text-lg font-medium"
      onClick={generatePassword}
    >
      <span className=" pointer-events-none relative z-10 mix-blend-difference">
        Generate Password
      </span>
      <span
        ref={spanRef}
        className=" pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100"
      ></span>
    </button>
  )
}
