import { randomUUID } from "crypto"
import { User } from "./User"
import { Comment } from "./Comment"
import { comments } from "../database/comment"
import { ProductType } from "../types/ProductType"
import { Review } from "./Review"
import { reviews } from "../database/review"

export class Product {
    private readonly _id: string

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
        console.log(`Produto: ${this._name} de valor R$ ${this._value} do tipo ${this._type}`)
        this.showComments()
        this.showReviews()
    }

    showComments() {
        // Filtra comentários pelo ID do produto atual
        const productComments = comments.filter(comment => comment.product.id === this._id)

        if (comments.length === 0) {
            console.log("Nenhum comentário disponível.")
            return;
        }

        console.log(`Comentários para o produto ${this._name}:`)
        productComments.forEach(comment => {
            console.log(`${comment.from.username}: ${comment.content}`)
        });
    }

    addComment(content: string, user: User) {
        const comment = new Comment(content, user, this)
        comments.push(comment)
        console.log(`Comentário adicionado com sucesso! `)
    }

    addReview(nota: number, user: User) {
        const review = new Review(nota, user, this)
        reviews.push(review)
        console.log(`Avaliação de ${nota} estrelas adicionada por ${user.username}.`)
    }

    showReviews() {
        // Filtra avaliações pelo ID do produto atual
        const productReviews = reviews.filter(review => review.product.id === this._id)

        if (productReviews.length === 0) {
            console.log(`Nenhuma avaliação disponível.`)
            return
        }

        console.log(`Avaliações para o produto ${this._name}:`)
        productReviews.forEach(review => {
            review.reviewDetails();
        });
    }

    calculateReviews() {
        // Filtra avaliações pelo ID do produto atual
        const productReviews = reviews.filter(review => review.product.id === this._id)

        if (productReviews.length === 0) {
            console.log(`Nenhuma avaliação disponível.`)
            return
        }

        const total = productReviews.reduce((sum, review) => sum + review.nota, 0);
        const media = total / productReviews.length;

        console.log(`Média de avaliações: ${media.toFixed(2)} estrelas.`)
        return
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