import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie"

type Data = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const token: any = process.env.TOKEN;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",cookie.serialize("token",token,{
          maxAge:60*60,
          sameSite:"strict",
          path:"/"
        }) 
      )
      const message:any="Successfull"
      res.status(200).json(message)
     
    } else {
      const mess: any = "Wrong credentials";
      res.status(400).json(mess);
    }
  }
};
