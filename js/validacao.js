import { log } from "./saida.js"
const verSeEstaVazio = (valor) => {
    return valor != "" ? false : true
}
const verSeEUmNumero = (valor) => {
    return (/^[0-9 .]*$/).test(valor) ? false : true
}
const listaDeErros = (erros) => {
    const lista = []
    Object.entries(erros).forEach((el, i, array) => {
        if (array[i][1] == true) {
            lista.push(array[i][0])
        }
    })
    return lista
}
const numeroDeErros = (listaDeErros) => {
    return listaDeErros.length
}
const validado = (listaDeErros, numeroDeErros, valor) => {
    return numeroDeErros != 0 ? log(listaDeErros) || false : valor
}
export function valida(valor) {
    const obj = {}
    obj.erros = {
        'vazio': verSeEstaVazio(valor),
        'não é um numero': verSeEUmNumero(valor)
    }
    obj.listaDeErros = listaDeErros(obj.erros)
    obj.numeroDeErros = numeroDeErros(obj.listaDeErros)
    obj.validado = validado(obj.listaDeErros, obj.numeroDeErros, valor)
    return obj.validado
}