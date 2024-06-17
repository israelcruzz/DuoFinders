import { TypeOf } from "zod";
import { listGameSchema } from "../../routes-schemas/games/list-game-schema";
import { FastifyReply, FastifyRequest } from "fastify";
import { GameNotFound } from "../../err/game-not-found";
import { FindGameUseCase } from "../../../use-cases/games/find-game-use-case";
import gamesPrismaRepositorie from "../../../repositories/games/prisma/games-prisma-repositorie";

type ListGameControllerRequest = {
  Params: TypeOf<typeof listGameSchema.schema.params>;
};

export async function ListGameController(
  request: FastifyRequest<ListGameControllerRequest>,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify();

    const { gameId } = request.params;

    const findGameUseCase = new FindGameUseCase(gamesPrismaRepositorie);

    const game = await findGameUseCase.execute({ gameId });

    return game;
  } catch (error) {
    if (error instanceof GameNotFound) {
      return reply.code(404).send({ message: error.message });
    }

    return reply.code(500).send({ message: "Unauthorizate" });
  }
}
