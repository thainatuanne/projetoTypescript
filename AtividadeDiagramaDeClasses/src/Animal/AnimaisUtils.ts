import { Animal } from './Animal';

export class AnimaisUtils {
    static executarAcoes(animais: Animal[]): void {
        animais.forEach((animal) => {
            animal.imprimir();
            animal.comportamento();
        });
    }
}