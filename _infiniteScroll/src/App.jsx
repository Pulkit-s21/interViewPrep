import { useEffect, useRef, useState } from "react"

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const containerRef = useRef(null)
  const textRef = useRef(null)

  // * function responsible for the infinite scroll
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight - 20 && !loading) {
      setLoading(true)
      setPage((prev) => prev + 1)
    }
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?page=${page}`
      )
      const json = await res.json()
      setItems((prev) => [...prev, ...json])
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.error(err.message)
    }
  }

  const resizeText = () => {
    const container = containerRef.current
    const text = textRef.current

    if (!container || !text) {
      return
    }

    const containerWidth = container.offsetWidth
    let min = 1
    let max = 2500

    while (min <= max) {
      const mid = Math.floor((min + max) / 2)
      text.style.fontSize = mid + "px"
      console.log({ min, mid, max })

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1
      } else {
        max = mid - 1
      }
    }

    text.style.fontSize = max + "px"
  }

  useEffect(() => {
    fetchData()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    resizeText()

    window.addEventListener("resize", resizeText)

    return () => {
      window.removeEventListener("resize", resizeText)
    }
  }, [])

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-screen items-center overflow-hidden"
        ref={containerRef}
      >
        <span
          className="font-bold text-cyan-600 whitespace-nowrap"
          ref={textRef}
        >
          Infinite Scroll
        </span>
      </div>
      <div>
        {loading ? (
          <h1 className="text-5xl font-bold">Loading</h1>
        ) : (
          <>
            {items?.map((item, idx) => {
              return <p key={idx}>{item.title}</p>
            })}
          </>
        )}
      </div>
    </div>
  )
}

export default App
