// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../../src/assets/database/guns.json";

export default function handler(req, res) {
  res.status(200).json(db);
}
