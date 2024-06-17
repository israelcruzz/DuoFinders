import { z } from "zod";

export const listGameSchema = {
  schema: {
    summary: "List Game",
    tags: ["games"],
    headers: z.object({
      authorization: z.string(),
    }),
    params: z.object({
      gameId: z.string().uuid(),
    }),
    response: {
      200: z.object({
        id: z.string(),
        name: z.string(),
        image: z.string(),
        description: z.string(),
        categoryId: z.string(),
        category: z.object({
          name: z.string(),
        }),
      }),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};
