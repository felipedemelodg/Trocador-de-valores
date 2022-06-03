import { elem } from "./elementos-html.js"
export function log(msg) {
    const p = document.createElement('p')
    p.className = "log"
    p.innerText = msg
    elem.formularios.appendChild(p)
    limpaLog()
}
function limpaLog() {
    const log = Object.values(document.getElementsByClassName('log'))

    setInterval(() => {
        log.forEach(el => {
            el.remove()
        })
    }, 2000)

}