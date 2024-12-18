import { ProductType } from "../types/ProductType";
import { Product } from "./Products";

export class DiscountedProduct extends Product {
    constructor(
        name: string,
        value: number,
        private _discountRate: number
    ) {
        super(name, value, ProductType.Special)
    }

    get discountRate(): number {
        return this._discountRate
    }

    get discountedPrice(): number {
        return this.value - (this.value * (this._discountRate / 100))
    }

    show(): string {
        return `Produto: ${this.name}\nPreço Original: R$ ${this.value.toFixed(2)}\nPreço com desconto: R$ ${this.discountedPrice.toFixed(2)}\nTaxa de Desconto: ${this._discountRate}%`
    }
}