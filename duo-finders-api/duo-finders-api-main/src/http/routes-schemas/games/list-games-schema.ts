import { z } from "zod";

export const listGamesSchema = {
  schema: {
    summary: "List Games",
    tags: ["games"],
    headers: z.object({
      authorization: z.string(),
    }),
    querystring: z.object({
      query: z.coerce.string().optional(),
      page: z.coerce.number().default(1),
    }),
    response: {
      200: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          image: z.string(),
          description: z.string(),
          categoryId: z.string(),
          countAds: z.number(),
          ads: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              yearPlaying: z.number(),
              discord: z.string(),
              weekDays: z.string(),
              hoursStart: z.number(),
              hoursEnd: z.number(),
              useVoiceChannel: z.boolean(),
              createdAt: z.date(),
              userId: z.string().uuid(),
              gameId: z.string().uuid(),
            })
          ),
        })
      ),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};
