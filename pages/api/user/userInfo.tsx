import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/lib/server/withHandler";
import client from "@/lib/db";
import { withApiSession } from "@/lib/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const user = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });
  if (req.session.user) {
    return res.json({ success: true, user });
  } else {
    return res.json({ success: false, msg: "사용자 인증 실패 로그인해주세요." });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
