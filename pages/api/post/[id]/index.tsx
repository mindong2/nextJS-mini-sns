import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/lib/server/withHandler";
import client from "@/lib/db";
import { withApiSession } from "@/lib/server/withSession";
const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const {
    query: { id },
    session: { user },
  } = req;
  const post = await client.post.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      comments: {
        select: {
          id: true,
          user: true,
          comment: true,
        },
      },
      user: {
        select: {
          id: true,
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

  const isFavorite = Boolean(
    await client.favorite.findFirst({
      where: {
        userId: user?.id,
        postId: Number(id),
      },
    })
  );

  return res.status(200).json({ success: true, post, isFavorite });
};

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
