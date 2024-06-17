import { z } from "zod";

export const listGamesByCategogySchema = {
  schema: {
    summary: "List games by category",
    tags: ["games"],
    headers: z.object({
      authorization: z.string()
    }),
    params: z.object({
      categoryId: z.string().uuid(),
    }),
    response: {
      200: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          image: z.string(),
          description: z.string(),
        })
      ),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};
