import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/mongo";
import { Product } from "../../../models/Product";

type Data = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { method,query:{id} } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const product: any = await Product.findById(id);
      res.status(200).json(product);
    } catch (err: any) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const product: any = await Product.create(req.body);
      res.status(200).json(product);
    } catch (err: any) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
    try {
      const product: any = await Product.create(req.body);
      res.status(200).json(product);
    } catch (err: any) {
      res.status(500).json(err);
    }
  }
};
