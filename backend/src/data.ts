import bcrypt from 'bcryptjs'
import { User } from './models/userModel'
import { Product } from './models/productModel'
import { Category } from './models/categoryModel'

export const sampleProducts: Product[] = [
  {
    _id: 'jdahciuwgfidaklvjcjah',
    name: 'Nike Slim shirt',
    category: 'Shirts',
    image: '../images/p1.jpg',
    price: 120,
    countInStock: 10,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 10,
    description: 'high quality shirt',
    bestseller: true,
    sale: true,
  },

]

export const sampleUsers: User[] = [
  {
    name: 'Joe',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]

export const sampleCategories: Category[] = [
  {
    category: 'Shirts',
    image: '../images/p1.jpg',
  },
  {
    category: 'Pants',
    image: '../images/p1.jpg',
  }
]