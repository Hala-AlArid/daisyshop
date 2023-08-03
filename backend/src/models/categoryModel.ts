import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { timestamps: true } })

export class Category {
public _id?: string

@prop({ required: true })
  public category!: string

  @prop({ required: true })
  public image!: string
}

export const CategoryModel = getModelForClass(Category)