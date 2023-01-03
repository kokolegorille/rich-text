// import React from "react"
// import { createRoot } from "react-dom/client"

// import "./css/app.scss"

// import Editor from "./js/my-rte/Editor"

// let container
// let root

// if (!container) {
//     container = document.getElementById('app')
//     if (container) {
//         root = createRoot(container)
//         root.render(<Editor />)  
//     }
// } else {
//     root.render(<Editor />)
// }


// Web Component

import "./css/app.scss"

import MyRte from "./js/my-rte"

if (!customElements.get("my-rte")) {
    customElements.define("my-rte", MyRte)
}