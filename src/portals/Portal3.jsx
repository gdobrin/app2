import React from "react"
import ReactDOM from "react-dom"
import { useState, useEffect } from "react"

const Portal3 = () => {
    const [domReady, setDomReady] = useState(false)

    useEffect(() => {
        setDomReady(true)
      })

    return (domReady ? ReactDOM.createPortal(<p>3</p>, document.getElementById('portal')) : null)
}

export default Portal3