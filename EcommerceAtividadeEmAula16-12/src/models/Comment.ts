import { randomUUID } from "crypto"
import { User } from "./User"
import { Product } from "./Products"

export class Comment{
    private readonly _id: string

    constructor(
        private _content: string,
        private _from: User,
        private _product: Product 
    ) {
        this._id = randomUUID();
    }

    get content(): string {
        return this._content
    }

    get from(): User {
        return this._from
    }

    get product(): Product {
        return this._product
    }

    show() {
        console.log(`Comentário de: ${this.from.username} : ${this.content}`)
    }

    toJson() {
        return {
            id: this._id,
            from: this._from.toJson(),
            content: this.content,
            product: this._product.toJson()
        }     
    }
}