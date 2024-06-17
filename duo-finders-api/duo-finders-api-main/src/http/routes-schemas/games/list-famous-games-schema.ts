import { z } from "zod";

export const listFamousGamesSchema = {
  schema: {
    summary: "List Famous Games",
    tags: ["games"],
    headers: z.object({
      authorization: z.string(),
    }),
    response: {
      200: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          image: z.string(),
          description: z.string(),
          countAds: z.number(),
          category: z.object({
            id: z.string(),
            name: z.string(),
          }),
        })
      ),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};
