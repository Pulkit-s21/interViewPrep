// import "./App.css"
// import { Hero } from "./components/Hero"
// import { BeverageOption } from "./components/BeverageOption"
// import { MenuItems } from "./components/MenuItems"
// import { Newsletter } from "./components/Newsletter"
// import { SpecialMenu } from "./components/SpecialMenu"
// import { About } from "./components/About"
// import { Footer } from "./components/Footer"

// function App() {
//   return (
//     <div className="grid grid-cols-1 gap-6">
//       <Hero />
//       <BeverageOption />
//       <MenuItems />
//       <Newsletter />
//       <SpecialMenu />
//       <About />
//       <Footer />
//     </div>
//   )
// }

import { useState } from "react"
import $ from "jquery"
import "./App.css"

import cors from "cors"
import express from "express"
const app = express()

app.use(
  cors({
    origin: "*",
    methods: ["GET", "PUT"],
  })
)
function App() {
  const [name, setName] = useState("")
  const [result, setResult] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = $(e.target)
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        setResult(data)
      },
    })
  }

  return (
    <div className="App">
      <form
        action="https://localhost:8000/Newsletter.php"
        method="post"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => handleChange(event)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1>{result}</h1>
    </div>
  )
}

export default App
