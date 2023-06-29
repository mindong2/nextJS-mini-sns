import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/lib/server/withHandler";
import client from "@/lib/db";
import { withApiSession } from "@/lib/server/withSession";
const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const {
    body: { title, post },
    session: { user },
  } = req;

  const Post = await client.post.create({
    data: {
      title,
      post,
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });

  if (req.method === "POST") {
    res.status(200).json({ success: true, Post });
  }
};

// private page
export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
