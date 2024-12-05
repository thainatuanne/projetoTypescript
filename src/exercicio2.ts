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
