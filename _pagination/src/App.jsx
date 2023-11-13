import { useEffect, useState, createContext } from "react"
import { ProductCard } from "./components/ProductCard"
import { Pagination } from "./components/Pagination"
export const Context = createContext()

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
    <Context.Provider value={{ products, totalPages, page, setPage }}>
      <ProductCard />

      <Pagination />
    </Context.Provider>
  )
}

export default App
