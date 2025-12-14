/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Bla } from "./_components/bla";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start bg-black text-2xl text-white">
      <div className="mx-3 flex-1">
        <Bla />
      </div>

      <div className="mx-3">
        <iframe title="frame" src="/frame" width="1150px" height="600" />
      </div>
    </main>
  );
}
