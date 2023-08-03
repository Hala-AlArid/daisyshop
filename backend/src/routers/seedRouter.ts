import express, { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { sampleProducts, sampleUsers, sampleCategories } from '../data'
import { ProductModel } from '../models/productModel'
import { CategoryModel } from '../models/categoryModel'
import { UserModel } from '../models/userModel'

export const seedRouter = express.Router()

seedRouter.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {

    await ProductModel.deleteMany({})
    const createdProducts = await ProductModel.insertMany(sampleProducts)
    res.json({ createdProducts })

    await CategoryModel.deleteMany({})
    const createdcategories = await CategoryModel.insertMany(sampleCategories)
    res.json({ createdProducts, createdcategories })

    await UserModel.deleteMany({})
    const createdUsers = await UserModel.insertMany(sampleUsers)
    res.json({ createdProducts, createdcategories, createdUsers })
  })
)