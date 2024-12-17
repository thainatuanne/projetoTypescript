import { User } from "./models/User";

const user1 = new User('Thaina Silva', 'thaina', 'thaina@gmail.com')
const user2 = new User('Madalena Silva', 'madalena', 'madalena@gmail.com')

console.log(user1.toJson())

import { Product } from "./models/Products";
import { ProductType } from "./types/ProductType";

const produto1 = new Product('Geladeira', 3000, ProductType.Home)
user1.addToCart(produto1)
console.log(user1)
user1.removeFromCart(produto1)
produto1.addComment('Compra boa', user1)
produto1.showComments()
produto1.show()