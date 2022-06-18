import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../src/assets/database/agents.json";

function Agents(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(db);
}

export default Agents;
