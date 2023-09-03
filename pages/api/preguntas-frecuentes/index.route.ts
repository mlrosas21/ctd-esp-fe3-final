import { FaqsType } from 'interface/types';
import { faqsData } from "dh-marvel/data/faqs/faqsData";
import { NextApiRequest, NextApiResponse } from "next";

type Data = FaqsType[] | { message: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "GET") {
    console.log(faqsData);
    res.status(200).json(faqsData);
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
}
