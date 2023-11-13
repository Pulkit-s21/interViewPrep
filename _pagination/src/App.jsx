import { useEffect, useState } from "react"

function App() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
      )
      const json = await res.json()
      setProducts(json.products)
      setTotalPages(json.total / 10)
    }
    fetchData()
  }, [page])

  return (
    <>
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

export default App
