// ex 1 e 2 aula 02/12
export function calcularMedia(numeros: number[]): number {
    const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
    return soma / numeros.length;
}

export function verificandoNota(nota: number): void {
    if (nota >= 6) {
        console.log("Aprovado com média:", nota.toFixed(2));
    } else {
        console.log("Reprovado com média:", nota.toFixed(2));
    }
}

const notas: number[] = [10, 8, 7];
const media = calcularMedia(notas);
console.log("Média das notas é:", media.toFixed(2));
verificandoNota(media);