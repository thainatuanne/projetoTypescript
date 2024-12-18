import { randomUUID } from "crypto"
import { Product } from "./Products"
import { users } from "../database/user"

export class User {
    private readonly id: string
    private _cart: Product[] =[] 

    constructor(
        private _name: string,
        private _username: string,
        private readonly _email: string
    ) {
        this.id = randomUUID();
        users.push(this) // Adiciona automaticamente à lista global de usuários
    }

    get name(): string {
        return this._name
    }

    get username(): string {
        return this._username
    }

    get email(): string {
        return this._email
    }

    get cart(): Product[] {
        return this._cart
    }

    addToCart(product: Product) {
        this._cart.push(product);
        console.log(`Produto "${product.name}" adicionado ao carrinho de ${this._username}.`)
    }

    removeFromCart(product: Product) {
        const index = this._cart.indexOf((product))
        if (index !== -1) {
            this._cart.splice(index, 1);
            console.log(`Produto "${product.name}" removido do carrinho de ${this._username}.`)
        } else {
            console.log(`Produto "${product.name}" não encontrado no carrinho.`)
        }
    }

    showProducts() {
        if (this._cart.length === 0) {
            console.log(`${this._username} não possui produtos no carrinho.`)
            return;
        }

        let total = 0;
        console.log(`Produtos no carrinho de ${this._username}:`);
        this._cart.forEach((product, index) => {
            console.log(`${index + 1}. ${product.show()}`);
            total += product.value;
        });
        console.log(`Valor total: R$ ${total.toFixed(2)}`);
    }
    toJson() {
        return {
            id: this.id,
            name: this._name,
            username: this._username,
            email: this._email,
        }
    }
}