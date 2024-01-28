import React from "react"

class ErrorBoundary extends React.Component {
  state = { hasErr: false }

  static getDerivedStateFromError(err) {
    return { hasErr: true }
  }

  componentDidCatch(err, info) {
    console.log(err, info)
  }

  render() {
    if (this.state.hasErr) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export default ErrorBoundary
