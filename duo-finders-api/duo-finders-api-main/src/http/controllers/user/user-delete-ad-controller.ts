import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteUserAdUseCase } from "../../../use-cases/ad/delete-user-ad-use-case";
import adPrismaRepositorie from "../../../repositories/ad/prisma/ad-prisma-repositorie";
import { TypeOf } from "zod";
import { deleteAUserAdSchema } from "../../routes-schemas/user/delete-a-user-ad-schema";
import { AdNotFound } from "../../err/ad-not-found";

type UserDeleteAdRequest = {
  Params: TypeOf<typeof deleteAUserAdSchema.schema.params>;
};

export async function UserDeleteAdController(
  request: FastifyRequest<UserDeleteAdRequest>,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify();

    const { adId } = request.params;

    console.log(adId);

    const deleteAd = new DeleteUserAdUseCase(adPrismaRepositorie);

    const messageCaseSuccessResponse = await deleteAd.execute({ adId });

    reply.code(200).send(messageCaseSuccessResponse);
  } catch (error) {
    if (error instanceof AdNotFound) {
      return reply.code(404).send({ error: error.message });
    }
    console.log(error);
    return reply.send({ message: "Unauthorizate" });
  }
}
