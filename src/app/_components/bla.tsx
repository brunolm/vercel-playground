/** biome-ignore-all lint/suspicious/noExplicitAny: bla */
"use client";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useCallback, useState } from "react";

export function Bla() {
  const navigator = window.navigator;
  const txt = `${navigator.userAgent}
${JSON.stringify((navigator as any).userAgentData, null, 2)}

${JSON.stringify(navigator.languages, null, 2)}
${JSON.stringify(navigator.language, null, 2)}
`;

  const [clickStatus, setClickStatus] = useState("");
  const handleClick = useCallback((e) => {
    setClickStatus(`
isTrusted: ${e.isTrusted}
pageX: ${e.pageX}
pageY: ${e.pageY}
screenX: ${e.screenX}
screenY: ${e.screenY}
clientX: ${e.clientX}
clientY: ${e.clientY}
`);
  }, []);

  return (
    <div className="w-full max-w-xs">
      <pre>{txt}</pre>

      <button id="clickHere" type="button" onClick={handleClick}>
        Click here
      </button>
      <pre>{clickStatus}</pre>
    </div>
  );
}
