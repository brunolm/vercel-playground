/* eslint-disable @typescript-eslint/no-unsafe-argument */
/** biome-ignore-all lint/suspicious/noExplicitAny: bla */
"use client";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useEffect, useState } from "react";

export function ServiceWorker() {
  const [userAgent, setUserAgent] = useState<string>("");

  useEffect(() => {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => console.log("@@@ Registered", reg))
      .catch((err) => console.log("@@@ Failed", err));
  }, []);

  const getUserAgentFromSW = async () => {
    if (!navigator.serviceWorker.controller) {
      console.error("No active service worker controller");
      return;
    }

    const messageChannel = new MessageChannel();

    messageChannel.port1.onmessage = (event: any) => {
      console.log("Received from SW:", event.data);
      setUserAgent(event.data.userAgent);
    };

    navigator.serviceWorker.controller.postMessage({ type: "GET_USER_AGENT" }, [
      messageChannel.port2,
    ]);
  };

  return (
    <div className="flex flex-col gap-2">
      <button type="button" onClick={getUserAgentFromSW}>
        Get User Agent from Service Worker
      </button>
      <input id="swUserAgent" value={userAgent} readOnly />
    </div>
  );
}
