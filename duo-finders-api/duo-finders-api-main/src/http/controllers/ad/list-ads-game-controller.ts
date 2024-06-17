import { FastifyReply, FastifyRequest } from "fastify";
import { TypeOf } from "zod";
import { listAdsForAGameSchema } from "../../routes-schemas/ad/list-ads-for-a-game-schema";
import { GetGameAdsUseCase } from "../../../use-cases/ad/get-game-ads-use-case";
import adPrismaRepositorie from "../../../repositories/ad/prisma/ad-prisma-repositorie";
import gamesPrismaRepositorie from "../../../repositories/games/prisma/games-prisma-repositorie";
import { GameNotFound } from "../../err/game-not-found";

type ListAdsGameRequest = {
  Querystring: TypeOf<typeof listAdsForAGameSchema.schema.querystring>;
  Params: TypeOf<typeof listAdsForAGameSchema.schema.params>;
};

export async function ListAdsGameController(
  request: FastifyRequest<ListAdsGameRequest>,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify();

    const { page } = request.query;
    const { gameId } = request.params;

    const gameAdsListing = new GetGameAdsUseCase(
      adPrismaRepositorie,
      gamesPrismaRepositorie                            
    );

    const ads = await gameAdsListing.execute({ gameId, page });

    return reply.code(200).send(ads);
  } catch (error) {
    if (error instanceof GameNotFound) {
      return reply.code(404).send({ message: error.message });
    }

    return reply.code(500).send("Internal Server Error");
  }
}
