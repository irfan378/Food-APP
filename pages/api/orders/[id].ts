import dbConnect from "../../../utils/mongo";
import { Order } from "../../../models/Order";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    query: { id },
  } = req;
  if (method === "GET") {
  }
  if (method === "PUT") {
  }
  if (method === "DELETE") {
}
};
export default handler