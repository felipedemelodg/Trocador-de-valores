import { elem } from "./elementos-html.js";
import { valida } from "./validacao.js"

elem.formularios.addEventListener('submit', (e) => {
    e.preventDefault()
})

elem.botaoTrocar.addEventListener('click', () => {
    const valor = valida(elem.campoComOvalor.value)
    if(valor != false){
        console.log('ok')
    }
})