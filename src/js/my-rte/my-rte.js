import React from "react"
import { createRoot } from "react-dom/client"

import Editor from "./Editor"

class MyRte extends HTMLElement {
    connectedCallback() {
        this.mountPoint = document.createElement("span")
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