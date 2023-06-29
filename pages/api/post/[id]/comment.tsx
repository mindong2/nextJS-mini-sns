import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/lib/server/withHandler";
import client from "@/lib/db";
import { withApiSession } from "@/lib/server/withSession";
const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const {
    body: { comment },
    query: { id },
    session: { user },
  } = req;

  if (req.method === "POST") {
    const Comment = await client.comment.create({
      data: {
        comment,
        post: {
          connect: {
            id: Number(id),
          },
        },
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    res.status(200).json({ success: true, Comment });
  }

  if (req.method === "GET") {
    const Comment = await client.comment.findMany({
      where: {
        postId: Number(id),
      },
    });
    res.status(200).json({ success: true, Comment });
  }
};

// private page
export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
