import { api } from "@/trpc/server";
import { Test } from "./_components/test";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center bg-black text-sm text-white">
      <CrudShowcase />
    </main>
  );
}

async function CrudShowcase() {
  const env = await api.post.getEnv();

  return (
    <div className="w-full max-w-xs">
      <pre>{JSON.stringify(env, null, 2)}</pre>
      <Test />
    </div>
  );
}
