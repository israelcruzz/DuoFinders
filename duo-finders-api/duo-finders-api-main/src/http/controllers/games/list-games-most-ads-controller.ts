import { FastifyReply, FastifyRequest } from "fastify";
import { FindManyMostGamesUseCase } from "../../../use-cases/games/find-many-most-games-ads-use-case";
import gamesPrismaRepositorie from "../../../repositories/games/prisma/games-prisma-repositorie";

export async function ListGamesMostAdsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify();

    const gamesMostListing = new FindManyMostGamesUseCase(
      gamesPrismaRepositorie
    );

    const mostGames = await gamesMostListing.execute();

    return reply.code(200).send(mostGames);
  } catch (error) {
    return reply.code(500).send("Internal Server Error");
  }
}
