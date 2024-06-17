import { FastifyReply, FastifyRequest } from "fastify";
import { TypeOf } from "zod";
import { createAdSchema } from "../../routes-schemas/ad/create-ad-schema";
import { CreateAdUseCase } from "../../../use-cases/ad/create-ad-use-case";
import adPrismaRepositorie from "../../../repositories/ad/prisma/ad-prisma-repositorie";
import gamesPrismaRepositorie from "../../../repositories/games/prisma/games-prisma-repositorie";
import userPrismaRepositorie from "../../../repositories/user/prisma/user-prisma-repositorie";
import { UserNotFound } from "../../err/user-not-found-error";
import { GameNotFound } from "../../err/game-not-found";
import { ExistAd } from "../../err/exist-ad";

type CreateAdRequest = {
  Body: TypeOf<typeof createAdSchema.schema.body>;
};

interface jwtPayload {
  sub: string
  iat: number
}

export async function CreateAdController(
  request: FastifyRequest<CreateAdRequest>,
  reply: FastifyReply
) {
  try {
    const user = await request.jwtVerify() as jwtPayload

    const userId = user.sub

    const {
      name,
      discord,
      hoursEnd,
      hoursStart,
      useVoiceChannel,
      weekDays,
      yearPlaying,
      gameId,
    } = request.body;

    const createAd = new CreateAdUseCase(
      adPrismaRepositorie,
      gamesPrismaRepositorie,
      userPrismaRepositorie
    );

    await createAd.execute({
      name,
      yearPlaying,
      weekDays,
      hoursStart,
      hoursEnd,
      discord,
      useVoiceChannel,
      gameId,
      userId,
    });

    return reply.code(201).send({ message: "Ad Created" });
  } catch (error) {
    if (
      error instanceof UserNotFound ||
      error instanceof GameNotFound ||
      error instanceof ExistAd
    ) {
      return reply.code(404).send({ error: error.message });
    }

    return reply.code(500).send({ message: "Internal Server Error" });
  }
}
