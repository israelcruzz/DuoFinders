import { FastifyReply, FastifyRequest } from "fastify";

export async function authVerify(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify();
  } catch (error) {
    reply.code(201).send({ message: "Unauthorized" });
  }
}
