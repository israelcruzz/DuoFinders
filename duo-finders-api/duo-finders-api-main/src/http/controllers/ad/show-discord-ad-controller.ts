import { FastifyReply, FastifyRequest } from "fastify";
import { TypeOf } from "zod";
import { getDiscordFromAnAdSchema } from "../../routes-schemas/ad/get-discord-from-an-ad-schema";
import { GetDiscordAdUseCase } from "../../../use-cases/ad/get-discord-ad-use-case";
import adPrismaRepositorie from "../../../repositories/ad/prisma/ad-prisma-repositorie";
import { AdNotFound } from "../../err/ad-not-found";

type ShowDiscordAdRequest = {
  Params: TypeOf<typeof getDiscordFromAnAdSchema.schema.params>;
};

export async function ShowDiscordAdController(
  request: FastifyRequest<ShowDiscordAdRequest>,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify();

    const { adId } = request.params;

    console.log(adId);

    const showDiscordUseCase = new GetDiscordAdUseCase(adPrismaRepositorie);

    const discordName = await showDiscordUseCase.execute({ adId });

    return reply.code(200).send(discordName);
  } catch (error) {
    if (error instanceof AdNotFound) {
      return reply.code(404).send({ message: error.message });
    }

    return reply.code(500).send({ message: "Internal Server Error" });
  }
}
