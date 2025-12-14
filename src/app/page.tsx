/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/** biome-ignore-all lint/suspicious/noExplicitAny: bla */
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center bg-black text-sm text-white">
      <CrudShowcase />
    </main>
  );
}

async function CrudShowcase() {
  const txt = `${navigator.userAgent}
${JSON.stringify((navigator as any).userAgentData, null, 2)}

${JSON.stringify(navigator.languages, null, 2)}
${JSON.stringify(navigator.language, null, 2)}
`;

  return (
    <div className="w-full max-w-xs">
      <pre>{txt}</pre>
    </div>
  );
}
