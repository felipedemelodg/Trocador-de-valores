const moedas = [100, 50, 25, 10, 5, 1]
const multiplicaEDivide = (real) => {
    let total = real
    let umReal = 0;
    let cinquentaCent = 0
    let vinteEcincoCent = 0
    let dezCent = 0;
    let cincoCent = 0;
    let umCent = 0;

    if (real >= 100) {
        umReal = parseInt(total / 100)
        total -= 100 * umReal
    }
    if (real >= cincoCent) {
        cinquentaCent = parseInt(total / 50)
        total -= 50 * cinquentaCent
    }
    if (real >= 25) {
        vinteEcincoCent = parseInt(total / 25)
        total -= 25 * vinteEcincoCent
    }
    if (real >= 10) {
        dezCent = parseInt(total / 10)
        total -= 10 * dezCent
    }
    if (real >= 5) {
        cincoCent = parseInt(total / 5)
        total -= 5 * cincoCent
    }
    if (real >= 1) {
        umCent = parseInt(total / 1)
        total -= 1 * umCent
    }

    return { umReal, cinquentaCent, vinteEcincoCent, dezCent, cincoCent, umCent }
}

export function trocador(valor) {
    const real = valor.replace('.', '')
    return multiplicaEDivide(real)
}