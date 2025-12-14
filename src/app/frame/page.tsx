/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { FramePageInfo } from "../_components/frame-page-info";

export default async function Home() {
  return (
    <div id="frame-page" className="text-white">
      frame page: <FramePageInfo />
    </div>
  );
}
