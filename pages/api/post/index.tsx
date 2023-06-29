import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/lib/server/withHandler";
import client from "@/lib/db";
import { withApiSession } from "@/lib/server/withSession";
const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const post = await client.post.findMany({
    include: {
      user: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          comments: true,
          Favorites: true,
        },
      },
    },
  });
  if (!req.session.user) {
    return res.status(401).json({ success: false });
  }
  return res.status(200).json({ success: true, post });
};

// private page
export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
