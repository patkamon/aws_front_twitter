import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    try {
      const response = await axios.get("http://ec2-13-214-178-167.ap-southeast-1.compute.amazonaws.com:8001/all");
      console.log(response.data);

      return res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error);
    }
  } else {
    return res.status(405).send({ message: "Method Not Allowed" });
  }
}
