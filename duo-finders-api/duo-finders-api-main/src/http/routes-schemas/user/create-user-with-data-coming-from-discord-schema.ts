import { z } from "zod";

export const createUserWithDataComingFromDiscordSchema = {
  schema: {
    summary: "Create user with data coming from discord",
    tags: ["user"],
    body: z.object({
      name: z.string(),
      avatar: z.string(),
      banner: z.string(),
      discord: z.string(),
    }),
    response: {
      201: z.object({
        token: z.string(),
        user: z.object({
          id: z.string(),
          name: z.string(),
          avatar: z.string(),
          banner: z.string(),
          discord: z.string()
        })
      }),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};