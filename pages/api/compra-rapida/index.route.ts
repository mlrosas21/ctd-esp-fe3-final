import { NextApiRequest, NextApiResponse } from "next";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { Comic } from "dh-marvel/interface/types";

type Data = Comic | { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const { id } = req.query;
    const idComic = Number(id);
    const response = await getComic(idComic);
    
    res.status(200).json(response);
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
}
