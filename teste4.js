const localidadeFaturamento = [
    {
        loca: "SP",
        valor: 67836.43,
        percentual: 0

    }, {
        loca: "RJ",
        valor: 36678.66,
        percentual: 0
        
    }, {
        loca: "MG",
        valor: 29229.88,
        percentual: 0
    }, {
        loca: "ES",
        valor: 27165.48,
        percentual: 0
    }, {
        loca: "Outros",
        valor: 19849.53,
        percentual: 0
    }
]

// Calcula a porcentagem de cada lugar baseado no total
const calculo = (lista) => {
    const total = valorTotal(localidadeFaturamento);

    lista.map(e => {
        let valor =(e.valor * 100) / total;
        e.percentual = valor;
        console.log(`A porcentagem de ${e.local} é : ${e.percentual}%`)
    })
}

// Calcula o total em todas as localidades para fazer a media
const valorTotal = (lista) => {
    let total = 0;
    lista.map(e => {
        total = total + e.valor;
    })

    console.log(`O total é : ${total}`)
    return total;
}

calculo(localidadeFaturamento);