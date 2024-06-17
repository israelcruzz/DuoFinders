import { FastifyReply, FastifyRequest } from "fastify";
import { GetUserAdsUseCase } from "../../../use-cases/ad/get-user-ads-use-case";
import adPrismaRepositorie from "../../../repositories/ad/prisma/ad-prisma-repositorie";
import userPrismaRepositorie from "../../../repositories/user/prisma/user-prisma-repositorie";
import { UserNotFound } from "../../err/user-not-found-error";

interface jwtPayload {
  sub: string
  iat: number
}

export async function UserAdsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const user = await request.jwtVerify() as jwtPayload

    const userId = user.sub

    const listUserAds = new GetUserAdsUseCase(
      adPrismaRepositorie,
      userPrismaRepositorie
    );

    const ads = await listUserAds.execute({ userId });

    return reply.code(200).send(ads);
  } catch (error) {
    if (error instanceof UserNotFound) {
      return reply.code(404).send({ error: error.message });
    }
    console.log(error);
    return reply.send({ message: "Unauthorizate" });
  }
}
