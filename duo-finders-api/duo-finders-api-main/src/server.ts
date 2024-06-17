import fastify from "fastify";
import { env } from "./env";
import AppRoutes from "./http/routes";
import { ZodError } from "zod";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyJwt from "@fastify/jwt";
import cors from "@fastify/cors";

export const app = fastify();

app.register(cors, {
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

app.register(fastifyJwt, {
  secret: env.NODE_SECRET_KEY_JWT,
});

app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "DuoFinders Api",
      description: "API specifications for the DuoFinders application backend",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(AppRoutes);
app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(401)
      .send({ error: "Validate Zod Error", issues: error.format() });
  }

  return reply
    .status(500)
    .send({ message: "Internal Server Error", error: error });
});

app
  .listen({ port: env.NODE_PORT, path: "0.0.0.0" })
  .then(() =>
    console.log(`🧙‍♂️Server Online: http://localhost:${env.NODE_PORT}`)
  );
