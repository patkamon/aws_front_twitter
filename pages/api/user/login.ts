import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    try {
      const response = await axios.post(
        "http://ec2-13-214-178-167.ap-southeast-1.compute.amazonaws.com:8001/login",
        req.body
      );
      if (response.data.status) {
        return res
          .status(response.data.status)
          .send({ message: response.data.msg });
      }
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(502).send({ message: "invalid username or password" });
    }
  } else {
    return res.status(405).send({ message: "Method Not Allowed" });
  }
}
