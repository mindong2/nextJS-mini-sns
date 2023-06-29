import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/lib/server/withHandler";
import client from "@/lib/db";
import CryptoJS from "crypto-js";
import { withApiSession } from "@/lib/server/withSession";
const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const {
    body: { email, password },
  } = req;

  const findUser = await client.user.findFirst({
    where: {
      email,
    },
  });

  if (findUser) {
    // 회원가입시 초기벡터값 같이 넣어줬으므로, 복호화 할때도 동일하게 적용 후 비교

    const iv = CryptoJS.enc.Hex.parse(decodeURIComponent(findUser.iv));
    const encryptedPassword = decodeURIComponent(findUser.password);

    const decryptedBytes = CryptoJS.AES.decrypt(encryptedPassword, process.env.PRIVATE_KEY!, { iv });
    const decryptPassword = decryptedBytes.toString(CryptoJS.enc.Utf8);

    if (decryptPassword === password) {
      // 인증 성공 세션 저장
      req.session.user = {
        id: findUser.id,
      };
      await req.session.save();

      res.status(200).json({ success: true, findUser });
    } else {
      res.status(404).json({ success: false, msg: "이메일 혹은 비밀번호를 다시 확인해주세요!" });
    }
  } else {
    res.status(404).json({ success: false, msg: "이메일 혹은 비밀번호를 다시 확인해주세요!" });
  }
};

// private page
export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
    isPrivate: false,
  })
);
