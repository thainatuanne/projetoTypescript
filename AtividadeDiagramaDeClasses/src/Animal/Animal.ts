export interface Animal {
    nome: string,
    som: string,
    atividade: string

    imprimir(): void;

    comportamento(): void;
}
