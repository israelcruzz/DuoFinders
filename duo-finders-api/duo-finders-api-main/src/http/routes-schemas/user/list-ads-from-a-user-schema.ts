import { z } from "zod";

export const listAdsFromAUserSchema = {
  schema: {
    summary: "List ads from a user",
    tags: ["user"],
    headers: z.object({
      authorization: z.string()
    }),
    response: {
      200: z.array(
        z.object({
          id: z.string().uuid(),
          name: z.string(),
          yearPlaying: z.number(),
          discord: z.string(),
          weekDays: z.string(),
          hoursStart: z.number(),
          hoursEnd: z.number(),
          useVoiceChannel: z.boolean(),
          createdAt: z.date(),
        })
      ),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};
