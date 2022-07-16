import mongoose from "mongoose";
import { createSchema, Type, typedModel } from "ts-mongoose";

const ProductSchema = createSchema(
  {
    title: Type.string({ required: true, maxlength: 60 }),
    desc: Type.string({ required: true, maxlength: 200 }),
    img: Type.string({ required: true }),
    prices: Type.number({ required: true }),
    extraOptions: Type.array().of({
      text: Type.string({ required: true }),
      price: Type.number({ required: true }),
    }),
  },
  { timestamps: true }
);

export const Product=mongoose.models.Product||mongoose.model("Product",ProductSchema)
