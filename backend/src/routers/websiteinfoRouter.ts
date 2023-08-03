import express from 'express'
import asyncHandler from 'express-async-handler'
import { WebsiteInfoModel } from '../models/websiteinfoModel'

export const WebsiteInfoRouter = express.Router()

WebsiteInfoRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const WebsiteInfo = await WebsiteInfoModel.find()
    res.json(WebsiteInfo);
  })
)

