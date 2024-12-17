import { randomUUID } from "crypto"
import { User } from "./User"
import { Comment } from "./Comment"
import { comments } from "../database/comment"
import { ProductType } from "../types/ProductType"

export class Product {
    private _id: string

    constructor(
        private _name: string,
        private _value: number,
        private _type: ProductType,
    ) {
        this._id = randomUUID()
    }

    get name(): string {
        return this._name
    }

    get value(): number {
        return this._value
    }

    get type(): string {
        return this._type
    }

    get id(): string {
        return this._id
    }

    show() {
        console.log(`Porduto: ${this._name} de valor R$ ${this._value} do tipo ${this._type}`)
        this.showComments()
    }

    showComments() {
        if (comments.length === 0) {
            console.log("Nenhum comentário disponível.")
            return;
        }
    
        comments.forEach(comment => {
            console.log(`${comment.from.username}: ${comment.content}`)
        });
    }
    
    addComment(content: string, user: User) {
        const comment = new Comment(content, user, this)
        comments.push(comment)
        console.log(`Comentário adicionado com sucesso! `)
    }
    
    toJson() {
        return {
            id: this.id,
            name: this._name,
            value: this._value,
            type: this._type
        }
    }
}