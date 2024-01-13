import { useContext, useEffect, useRef } from "react"
import { Context } from "../App"

export const GenerationArea = () => {
  const btnRef = useRef(null)
  const spanRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width, height } = e.target.getBoundingClientRect()
      const offsetX = e.offsetX
      const offsetY = e.offsetY
      const left = `${(offsetX / width) * 100}%`
      const top = `${(offsetY / height) * 100}%`
      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" })
      spanRef.current.animate({ top }, { duration: 250, fill: "forwards" })
    }
    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 250, fill: "forwards" }
      )
      spanRef.current.animate(
        { top: "50%" },
        { duration: 200, fill: "forwards" }
      )
    }

    const btnCurrent = btnRef.current
    btnCurrent?.addEventListener("mousemove", handleMouseMove)
    btnCurrent?.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      btnCurrent?.removeEventListener("mousemove", handleMouseMove)
      btnCurrent?.removeEventListener("mouseleave", handleMouseLeave)
    }
  })

  const { password, success, setSuccess } = useContext(Context)
  return (
    <>
      {password && (
        <div className="flex items-center gap-4">
          <h3 className="text-white">Generated Password:</h3>
          <input
            readOnly
            value={password}
            className="text-green-700 outline-none text-center border-2 rounded-md bg-gray-100 text-lg"
          />
          <button
            ref={btnRef}
            className="relative overflow-hidden rounded-lg p-4"
            onClick={() => {
              navigator.clipboard.writeText(password)
              setSuccess("Password copied to clipboard")
              setTimeout(() => setSuccess(""), 2000)
            }}
          >
            <span className="relative mix-blend-difference pointer-events-none z-10">
              Copy
            </span>
            <span
              ref={spanRef}
              className="pointer-events-none h-12 w-12 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100"
            ></span>
          </button>
        </div>
      )}
      {success && <p className="text-green-500">{success}</p>}
    </>
  )
}
