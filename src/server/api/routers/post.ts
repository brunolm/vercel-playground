import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

let post = {
  id: 1,
  name: "Hello World",
};

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      post = { id: post.id + 1, name: input.name };
      return post;
    }),

  getLatest: publicProcedure.query(() => {
    return post;
  }),

  getEnv: publicProcedure.query((opts) => {
    // get all environment variables that starts with VERCEL_
    const env = Object.entries(process.env)
      .filter(([key]) => key.startsWith("VERCEL_"))
      .reduce(
        (acc, [key, value]) => {
          acc[key] = value;
          return acc;
        },
        {} as Record<string, string>,
      );

    return {
      env,
      req: {
        ctx: opts.ctx,
      },
    };
  }),
});
