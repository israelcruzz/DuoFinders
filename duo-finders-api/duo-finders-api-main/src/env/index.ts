import "dotenv";
import { z } from "zod";

const envSchema = z.object({
  NODE_PORT: z.coerce.number().default(3333),
  NODE_SECRET_KEY_JWT: z.coerce.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
