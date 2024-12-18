import { User } from "./models/User";

const user1 = new User('Thaina Silva', 'thaina', 'thaina@gmail.com')

console.log(user1.toJson()) // usando Json

import { Product } from "./models/Products";
import { ProductType } from "./types/ProductType";
import { DiscountedProduct } from "./models/DiscountedProduct";

const produto1 = new Product('Geladeira', 3000, ProductType.Home)
user1.addToCart(produto1)
console.log(user1)
user1.removeFromCart(produto1)
produto1.addComment('Compra boa', user1)

// REVIEWS 
produto1.addReview(5, user1);
produto1.showComments();
produto1.show();
produto1.calculateReviews();


// Cenário com desconto

const discountedProduct = new DiscountedProduct('Notebook', 5000, 10)
console.log(discountedProduct.show())

const user2 = new User('Madalena Silva', 'madalena', 'madalena@gmail.com')
const produto2 = new Product('Mesa Rustica', 2000, ProductType.Home)
user2.addToCart(produto2)
console.log(user2)
produto2.addComment('Mesa com ranhuras, não compraria novamente', user2)
produto2.addReview(1, user2)
produto2.showComments()
produto2.show()
produto2.calculateReviews()

const discountedProduct2 = new DiscountedProduct('Mesa Rustica', 2000, 5)
console.log(discountedProduct2.show())