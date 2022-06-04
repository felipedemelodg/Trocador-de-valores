import { elem } from "./elementos-html.js";
import { valida } from "./validacao.js"
import { trocador } from "./trocador.js"

elem.formularios.addEventListener('submit', (e) => {
    e.preventDefault()
})              

elem.botaoTrocar.addEventListener('click', () => {
    const valor = valida(elem.campoComOvalor.value)
    if (valor != false) {
        const trocado = trocador(valor)
        elem.moedaDe1.innerText  = trocado.umCent
        elem.moedaDe5.innerText  = trocado.cincoCent
        elem.moedaDe10.innerText  = trocado.dezCent
        elem.moedaDe25.innerText  = trocado.vinteEcincoCent
        elem.moedaDe50.innerText  = trocado.cinquentaCent
        elem.moedaDe100.innerText  = trocado.umReal
        
    }
})

