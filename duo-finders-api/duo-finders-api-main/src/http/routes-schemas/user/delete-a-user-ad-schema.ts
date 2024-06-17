import { z } from "zod";

export const deleteAUserAdSchema = {
  schema: {
    summary: "Delete a user ad",
    tags: ["user"],
    headers: z.object({
      authorization: z.string()
    }),
    params: z.object({
      adId: z.string().uuid(),
    }),
    response: {
      201: z.object({
        message: z.string(),
      }),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};
