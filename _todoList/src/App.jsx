import { useState } from "react"

function App() {
  let [list, setList] = useState(["Buy milk", "Finish Homework"])
  let [newTask, setNewTask] = useState("")
  return (
    <>
      <div className="flex gap-4">
        <input
          className="outline-none text-center"
          type="text"
          placeholder="New Task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={() => {
            {
              newTask.length > 0 && setList((current) => [...current, newTask])
            }
          }}
        >
          Add Task
        </button>
      </div>

      {list.map((item, idx) => {
        return (
          <ul key={idx} className="text-center bg-transparent">
            <>
              <li className="flex-1">{item}</li>
            </>
          </ul>
        )
      })}
    </>
  )
}

export default App
