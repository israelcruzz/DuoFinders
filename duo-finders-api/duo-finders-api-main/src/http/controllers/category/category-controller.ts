import { FastifyReply, FastifyRequest } from "fastify";
import { FindManyCategoriesUseCase } from "../../../use-cases/category/find-many-categories-use-case";
import categoryPrismaRepositorie from "../../../repositories/category/prisma/category-prisma-repositorie";

export async function CategoryController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  await request.jwtVerify();

  const findManyCategories = new FindManyCategoriesUseCase(
    categoryPrismaRepositorie
  );

  try {
    const categories = await findManyCategories.execute();
    reply.code(201).send(categories);
  } catch (error) {
    reply.code(404).send({ message: "Internal Server Error" });
  }
}
