import { Faq } from "interface/faqs";
import { NextApiRequest, NextApiResponse } from "next";
import faqs from "data/faqs";

type Data = Faq[] | { message: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "GET") {
    res.status(200).json(faqs);
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
}
