import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "../features/cake/cakeSlice"
import { useState } from "react"

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  const [cake, setCake] = useState(1)
  return (
    <div>
      <div className="p-4">
        <h2>Number of Cakes Available: {numOfCakes} </h2>
        <input
          className="text-center p-2"
          type="number"
          value={cake}
          onChange={(e) => setCake(parseInt(e.target.value))}
        />
      </div>
      <button onClick={() => dispatch(ordered(cake))}>Order Cake: </button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cake: </button>
    </div>
  )
}
