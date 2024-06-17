import { FastifyReply, FastifyRequest } from "fastify";
import { TypeOf } from "zod";
import { listGamesSchema } from "../../routes-schemas/games/list-games-schema";
import { FindManyGamesUseCase } from "../../../use-cases/games/find-many-games-use-case";
import gamesPrismaRepositorie from "../../../repositories/games/prisma/games-prisma-repositorie";

type ListGamesRequest = {
  Querystring: TypeOf<typeof listGamesSchema.schema.querystring>;
};

export async function ListGamesController(
  request: FastifyRequest<ListGamesRequest>,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify();

    const { query, page } = request.query;

    const listGamesUseCase = new FindManyGamesUseCase(gamesPrismaRepositorie);

    const listingGames = await listGamesUseCase.execute({ query, page });

    return reply.code(200).send(listingGames);
  } catch (error) {
    return reply.code(404).send({ message: "Unauthorizate" });
  }
}
