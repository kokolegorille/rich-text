import React from "react"
import { createRoot } from "react-dom/client"

import Editor from "./Editor"
import styles from "./styles"

class MyRte extends HTMLElement {
    connectedCallback() {
        this.mountPoint = document.createElement("div")
        const shadowRoot = this.attachShadow({ mode: "closed" })
        shadowRoot.adoptedStyleSheets = [styles]
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