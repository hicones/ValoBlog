// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../src/assets/database/guns.json";

function Guns(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(db);
}

export default Guns;
