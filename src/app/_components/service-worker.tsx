/** biome-ignore-all lint/suspicious/noExplicitAny: bla */
"use client";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useEffect } from "react";

export function ServiceWorker() {
  useEffect(() => {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => console.log("@@@ Registered", reg))
      .catch((err) => console.log("@@@ Failed", err));
  }, []);

  // biome-ignore lint/complexity/noUselessFragments: x
  return <></>;
}
