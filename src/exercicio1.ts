export function calcularMedia(nota1: number, nota2: number): { media: number; status: string } {
    const media = (nota1 + nota2) / 2;

    const status = media >= 6 ? "Aprovado" : "Reprovado";

    return { media, status };
}

const resultado = calcularMedia(10, 8);
console.log(`Média: ${resultado.media}, Status: ${resultado.status}`);

// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.