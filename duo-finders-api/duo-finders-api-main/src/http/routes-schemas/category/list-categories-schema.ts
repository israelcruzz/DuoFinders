import { z } from "zod";

export const listCategorySchema = {
  schema: {
    summary: "List categories",
    tags: ["category"],
    headers: z.object({
      authorization: z.string()
    }),
    response: {
      201: z.array(
        z.object({
          id: z.string().uuid(),
          name: z.string(),
        })
      ),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};
