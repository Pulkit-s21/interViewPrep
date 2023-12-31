import { useContext } from "react"
import { Context } from "../App"

export const GenerationArea = () => {
  const { password, success, setSuccess } = useContext(Context)
  return (
    <>
      {password && (
        <div className="flex items-center gap-4">
          <h3 className="text-black">Generated Password:</h3>
          <input
            readOnly
            value={password}
            className="text-green-700 text-center border-2 rounded-md bg-gray-100 text-lg"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(password)
              setSuccess("Password copied to clipboard")
              setTimeout(() => setSuccess(""), 2000)
            }}
          >
            Copy
          </button>
        </div>
      )}
      {success && <p className="text-green-500">{success}</p>}
    </>
  )
}
