import { FastifyReply, FastifyRequest } from "fastify";
import { GetRecentAdsUseCase } from "../../../use-cases/ad/get-recent-ads-use-case";
import adPrismaRepositorie from "../../../repositories/ad/prisma/ad-prisma-repositorie";

export async function ListRecentAdsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify();

    const date = new Date();

    const listRecentAdsUseCase = new GetRecentAdsUseCase(adPrismaRepositorie);

    const ads = await listRecentAdsUseCase.execute({ date });

    return reply.code(200).send(ads);
  } catch (error) {
    console.log(error);
    
    return reply.code(500).send({ message: "Internal Server Error" });
  }
}
