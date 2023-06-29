import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/lib/server/withHandler";
import { withApiSession } from "@/lib/server/withSession";
const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const {
    session: { user },
  } = req;

  if (user) {
    await req.session.destroy();
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
};

// private page
export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
