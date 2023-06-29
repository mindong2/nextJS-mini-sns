import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/lib/server/withHandler";
import client from "@/lib/db";
import CryptoJS from "crypto-js";
const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const {
    body: { name, email, password1 },
  } = req;

  // 비밀번호 암호화
  const iv = CryptoJS.lib.WordArray.random(16); // 무작위 초기화 벡터 생성
  const encryptPassword = CryptoJS.AES.encrypt(password1, process.env.PRIVATE_KEY!, { iv }).toString();

  const findUser = await client.user.findFirst({
    where: {
      email,
    },
  });

  if (!findUser) {
    const createUser = await client.user.create({
      data: {
        name,
        email,
        password: encodeURIComponent(encryptPassword),
        iv: encodeURIComponent(iv.toString()),
      },
    });
    res.status(200).json({ success: true, createUser });
  } else {
    res.status(403).json({ success: false, msg: "이미 사용중인 계정입니다!" });
  }
};

export default withHandler({
  methods: ["POST"],
  handler,
  isPrivate: false,
});
