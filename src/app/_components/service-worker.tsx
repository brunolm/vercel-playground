/* eslint-disable @typescript-eslint/no-unsafe-argument */
/** biome-ignore-all lint/suspicious/noExplicitAny: bla */
"use client";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useEffect, useState } from "react";

export function ServiceWorker() {
  const [userAgent, setUserAgent] = useState<string>("");

  const getUserAgentFromSW = async () => {
    if (!navigator.serviceWorker.controller) {
      console.error("No active service worker controller");
      return;
    }

    const messageChannel = new MessageChannel();

    messageChannel.port1.onmessage = (event) => {
      console.log("Received from SW:", event.data);
      setUserAgent(event.data.userAgent);
    };

    navigator.serviceWorker.controller.postMessage({ type: "GET_USER_AGENT" }, [
      messageChannel.port2,
    ]);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: x
  useEffect(() => {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => console.log("@@@ Registered", reg))
      .catch((err) => console.log("@@@ Failed", err));

    setTimeout(() => {
      void getUserAgentFromSW();
    }, 2000);
  }, []);

  return (
    <div className="text-xs">
      service worker ua: <span>{userAgent}</span>
    </div>
  );
}
