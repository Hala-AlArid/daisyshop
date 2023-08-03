import express from 'express'
import asyncHandler from 'express-async-handler'
import { Product, ProductModel } from '../models/productModel'
import { isAuth } from '../utils'

export const productRouter = express.Router()
// /api/prodcuts
productRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find()
    res.json(products)
  })
)

productRouter.get(
  '/_id/:_id',
  asyncHandler(async (req, res) => {
    const product = await ProductModel.findOne({ _id: req.params._id })
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product Not Found' })
    }
  })
)

// productRouter.post(
//   '/admin',
//   isAuth,
//   asyncHandler(async (req: Request, res: Response) => {
//     const Product = await ProductModel.create({
//       name: req.body.name,
//     } as Product)
//     res.json({
//       _id: product._id,
//       name: product.name,
//     })
//   })
// )
