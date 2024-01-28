import logo from "../assets/CoffeeLove.svg"
import x from "../assets/twitter-logo.png"
import insta from "../assets/instagram-logo.png"
import fb from "../assets/facebook_logo.png"
import { useState } from "react"

export const Footer = () => {
  const [email, setEmail] = useState("")
  const [result, setResult] = useState("")
  const links = [
    { name: "home" },
    { name: "menu" },
    { name: "delivery" },
    { name: "locations" },
  ]

  const socials = [{ name: fb }, { name: insta }, { name: x }]

  return (
    <div className="flex flex-col gap-4 p-4 bg-white font-Poppins">
      <div className="flex gap-4 items-center border-b-2 py-4">
        <img className="w-12" src={logo} alt="Logo" />
        <p className="text-2xl font-semibold">CoffeeLove</p>
      </div>

      {/* links */}
      <ul className="flex flex-col gap-4">
        {links.map((link, idx) => {
          return (
            <li
              className="uppercase font-semibold text-LightBrown text-xl"
              key={idx}
            >
              <a href="#">{link.name}</a>
            </li>
          )
        })}
      </ul>

      {/* newsletter */}
      <div className="flex flex-col gap-2">
        <p className="font-bold text-2xl">Newsletter</p>
        <form
          className="flex flex-col sm:flex-row"
          action="https://localhost:8000/Newsletter.php"
          method="post"
          onSubmit={(e) => {
            e.preventDefault()
            const form = document.querySelector(e.target)
            document.querySelector.ajax({
              type: "POST",
              url: form.attr("action"),
              data: form.serialize(),
              success(data) {
                setResult(data)
              },
            })
          }}
        >
          <input
            required
            className="bg-Albescent p-4 text-LightBrown placeholder:text-LightBrown md:rounded-l-md"
            id="email"
            type="email"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-LightBrown p-4 text-Albescent md:rounded-r-md">
            Subscribe
          </button>
        </form>
        <h1>{result}</h1>
      </div>

      {/* socials */}
      <div className="flex gap-2 items-center justify-center">
        {socials.map((social, idx) => {
          return (
            <a href="" key={idx}>
              <img src={social.name} alt="Social" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
