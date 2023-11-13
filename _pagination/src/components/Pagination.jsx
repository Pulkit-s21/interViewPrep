import { useContext } from "react"
import { Context } from "../App"

export const Pagination = () => {
  const { products, page, totalPages, setPage } = useContext(Context)
  return (
    <>
      {products.length > 0 && (
        <div className="flex gap-1 justify-center">
          <span
            onClick={() => {
              {
                page > 1 && setPage(page - 1)
              }
            }}
            className={` ${
              page === 1 && "hidden"
            } px-4 py-2 border-2 border-gray-200 cursor-pointer`}
          >
            {" "}
            ◀{" "}
          </span>
          {[...Array(totalPages)].map((_, i) => (
            <span
              onClick={() => setPage(i + 1)}
              className={` ${
                page === i + 1 && "bg-blue-400"
              } px-4 py-2 border-2 border-gray-200 cursor-pointer`}
              key={i}
            >
              {i + 1}
            </span>
          ))}
          <span
            onClick={() => {
              {
                page < totalPages && setPage(page + 1)
              }
            }}
            className={` ${
              page === 10 && "hidden"
            } px-4 py-2 border-2 border-gray-200 cursor-pointer`}
          >
            {" "}
            ▶{" "}
          </span>
        </div>
      )}
    </>
  )
}

export default Pagination
