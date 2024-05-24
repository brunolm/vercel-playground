import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
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
      custom: "develop",
      req: {
        ctx: opts.ctx,
      },
    };
  }),
});
