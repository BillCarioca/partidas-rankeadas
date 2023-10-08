const herois = [{ nome:"Arthur", vitorias: 50, derotas:4},
                { nome:"Paulo", vitorias: 60, derotas:7},
                { nome:"Joana", vitorias: 100, derotas:12},
                { nome:"Bill", vitorias: 10, derotas:4}
                ]


function calcularSaldo(vitorias,derotas){
    return vitorias-derotas
}
function calcularNivel(saldo){
    switch(true){
        case saldo<=10: return "Ferro"
        case saldo<=20: return "Bronze"
        case saldo<=50: return "Prata"
        case saldo<=80: return "Ouro"
        case saldo<=90: return "Diamante"
        case saldo<=100: return "Lendário"
        case saldo>100: return "Imortal"
    }   
}

for(heroi of herois){
    const saldo = calcularSaldo(heroi.vitorias,heroi.derotas)
    const nivel = calcularNivel(saldo)
    console.log(`O Herói de nome ${heroi.nome} tem de saldo de ${saldo} está no nível de ${nivel}`)
}
