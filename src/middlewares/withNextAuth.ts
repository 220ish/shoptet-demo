import { NextApiRequest, NextApiHandler } from "next";
import { NextApiResponseWithSession } from "@types";
import { getServerSession } from "next-auth/next";


const withNextAuth =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponseWithSession) => {
    const session = await getServerSession()
    if (session) {
      res.session = session;
      return handler(req, res);
    } else {
      return res.status(401).json({
        error: 401,
        success: false,
        message: "Unauthorized"
      });
    }
  };

export default withNextAuth;
