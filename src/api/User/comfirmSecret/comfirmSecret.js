import { prisma } from "../../../../generated/prisma-client";
import { geerateToken } from "../../../utils";

export default {
  Mutation: {
    comfirmSecret: async (_, args) => {
      const { email, secret } = args;

      const user = await prisma.user({ email });
      if (user.loginSecret === secret) {
        await prisma.updateUser({
          where: {
            id: user.id
          },
          data: {
            loginSecret: ""
          }
        });
        return geerateToken(user.id);
      } else {
        throw Error("Wrong email / secret conbination");
      }
    }
  }
};
