import { FastifyReply, FastifyRequest } from "fastify";
import { FindGamePerCategoryUseCase } from "../../../use-cases/games/find-game-per-category-use-case";
import gamesPrismaRepositorie from "../../../repositories/games/prisma/games-prisma-repositorie";
import categoryPrismaRepositorie from "../../../repositories/category/prisma/category-prisma-repositorie";
import { TypeOf } from "zod";
import { listGamesByCategogySchema } from "../../routes-schemas/games/list-games-by-category-shema";
import { CategoryDoesNotExists } from "../../err/category-does-not-exists-error";

type ListGamesCategory = {
  Params: TypeOf<typeof listGamesByCategogySchema.schema.params>;
};

export async function ListGamesCategoryController(
  request: FastifyRequest<ListGamesCategory>,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify();

    const { categoryId } = request.params;

    const listGamerPerCategory = new FindGamePerCategoryUseCase(
      gamesPrismaRepositorie,
      categoryPrismaRepositorie
    );

    const games = await listGamerPerCategory.execute({ categoryId });

    return reply.code(200).send(games);
  } catch (error) {
    if (error instanceof CategoryDoesNotExists) {
      return reply.code(404).send({ message: error.message });
    }

    return reply.code(500).send({ message: "Unauthorizate" });
  }
}
