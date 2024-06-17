import { z } from "zod";

export const listAdsRecentsSchema = {
  schema: {
    summary: "List ads recents",
    tags: ["ad"],
    headers: z.object({
      authorization: z.string(),
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
          userId: z.string(),
          gameId: z.string(),
          game: z.object({
            id: z.string().uuid(),
            name: z.string(),
            image: z.string(),
            description: z.string(),
            categoryId: z.string(),
            category: z.object({
              name: z.string(),
            }),
          }),
        })
      ),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};
