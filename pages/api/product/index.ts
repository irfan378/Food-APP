import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/mongo";


type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { method } = req;
  dbConnect();
  if (method === "GET") {
  }
  if (method === "POST") {
    try {
        req.body
    } catch (err:any) {
        res.status(500).json(err)
    }
  }
};
