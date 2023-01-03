import React from "react"
import { createRoot } from "react-dom/client"

import "../../css/app.scss"

import Editor from "./Editor"

class MyRte extends HTMLElement {
    connectedCallback() {
        this.mountPoint = document.createElement("div")
        const shadowRoot = this.attachShadow({ mode: "closed" })
        shadowRoot.appendChild(this.mountPoint)
        this.render()
    }

    render() {
        if (this.mountPoint) {
            const root = createRoot(this.mountPoint)
            root.render(<Editor />)
        }  
    }
}

export default MyRte;