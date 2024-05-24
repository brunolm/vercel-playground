"use client";

import { api } from "@/trpc/react";

export const Test = () => {
  const { data } = api.post.getEnv.useQuery();

  return (
    <div>
      <h1>Test</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
