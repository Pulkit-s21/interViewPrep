import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import ErrBoundary from "./components/ErrBoundary"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrBoundary fallback="These was some error!!">
      <App />
    </ErrBoundary>
  </React.StrictMode>
)
