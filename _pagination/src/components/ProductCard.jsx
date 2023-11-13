import { useContext } from "react"
import { Context } from "../App"

export const ProductCard = () => {
  const { products } = useContext(Context)
  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      {/* {products?.slice(page*10 - 10, page*10).map((prod) => { This is totally frontend solution which is kinda bad as our website needs to call all of the items even when we only need the first few  */}

      {products?.map((prod) => {
        return (
          <div className="flex flex-col text-center gap-4" key={prod.id}>
            <img
              className="h-80 object-cover"
              src={prod.thumbnail}
              alt={prod.tite}
            />
            {prod.title}
          </div>
        )
      })}
    </div>
  )
}
