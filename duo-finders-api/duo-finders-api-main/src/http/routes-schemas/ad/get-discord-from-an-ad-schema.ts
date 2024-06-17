import { z } from "zod";

export const getDiscordFromAnAdSchema = {
  schema: {
    summary: "Get discord from an ad",
    tags: ["ad"],
    headers: z.object({
      authorization: z.string()
    }),
    params: z.object({
      adId: z.string().uuid(),
    }),
    response: {
      200: z.object({
        discordName: z.string(),
      }),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};
