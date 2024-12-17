import { randomUUID } from "crypto"
import { User } from "./User";
import { Product } from "./Products";


export class Review {
    private _id: string

    constructor(
        private _nota: number,
        private _from: User,
        private _product: Product
    )
    {
        this._id = randomUUID();
    }

    get nota(): number {
        return this._nota
    }

    get from(): User {
        return this._from
    }

    get product(): Product {
        return this._product
    }

    addReview() {
        if (this._nota < 0 || this._nota > 5) {
            console.log(`Atenção! A nota deve estar entre 5 e 0.`)
        } else {
            this._id = randomUUID()
        }
    }

    reviewDetails() {
        console.log(`ID: ${this._id} | Usuário: ${this._from} | Nota: ${this._nota}`)
    }

    toJson(){
        return {
            id: this._id,
            nota: this._nota,
            from: this._from.toJson(),
            product: this._product.toJson()          
        }
    }
}