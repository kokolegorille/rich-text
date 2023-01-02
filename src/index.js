import "./css/app.scss"

import MyRte from "./js/my-rte"

if (!customElements.get("my-rte")) {
    customElements.define("my-rte", MyRte)
}