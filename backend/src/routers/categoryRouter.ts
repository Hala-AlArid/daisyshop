import express from 'express'
import asyncHandler from 'express-async-handler'
import { CategoryModel } from '../models/categoryModel'

export const categoryRouter = express.Router()

categoryRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const categories = await CategoryModel.find()
    res.json(categories)
  })
)

categoryRouter.get(
  '/category/:category',
  asyncHandler(async (req, res) => {
    const category = await CategoryModel.findOne({ category: req.params.category })
    if (category) {
      res.json(category)
    } else {
      res.status(404).json({ message: 'Category Not Found' })
    }
  })
)