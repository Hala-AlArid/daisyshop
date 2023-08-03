import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { timestamps: true } })

export class WebsiteInfo {
public _id?: string

@prop({ required: true })
  public name!: string

  @prop({ required: true })
  public address!: string

  @prop({ required: true })
  public background_image!: string

  @prop({ required: true })
  public banner_image!: string

  @prop({ required: true })
  public banner_text!: string

  @prop({ required: true })
  public description!: string

  @prop({ required: true })
  public email!: string

  @prop({ required: true })
  public facebook!: string

  @prop({ required: true })
  public hero_image!: string

  @prop({ required: true })
  public instagram!: string

  @prop({ required: true })
  public phone_number!: string

  @prop({ required: true })
  public slogan!: string

  @prop({ required: true })
  public tiktok!: string

  @prop({ required: true })
  public twitter!: string

  @prop({ required: true })
  public slideshow_images!: Array<string>
}

export const WebsiteInfoModel = getModelForClass(WebsiteInfo)