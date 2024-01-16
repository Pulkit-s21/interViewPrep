import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "../features/icecream/icecreamSlice"

export const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOficecreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Icecream: {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered(5))}>Order Icecream: </button>
      <button onClick={() => dispatch(restocked(10))}>
        Restock Icecream:{" "}
      </button>
    </div>
  )
}
