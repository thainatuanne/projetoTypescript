export type NotaPeso = {
    nota: number;
    peso: number;
};

export function mediaPonderada(lista: NotaPeso[]): number {
    let somaNotas = 0;
    let somaPesos = 0;

    for (const item of lista) {
        somaNotas += item.nota * item.peso;
        somaPesos += item.peso;
    }

    return somaPesos ? somaNotas / somaPesos : 0;
}

const listarNotas: NotaPeso[] = [
    { nota: 7, peso: 2 },
    { nota: 9, peso: 3 },
];

const media = mediaPonderada(listarNotas);
console.log(`A média ponderada é: ${media.toFixed(2)}`);


// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado