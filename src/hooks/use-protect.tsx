// components/ProtectComponent.tsx

"use client";

import { useEffect } from "react";

export default function ProtectComponent() {
  useEffect(() => {
    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      alert("Conteúdo protegido.");
    };

    const disableDevToolsShortcuts = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && e.key === "U") ||
        e.key === "F12"
      ) {
        e.preventDefault();
        alert("Conteúdo protegido.");
      }
    };

    document.addEventListener("contextmenu", disableContextMenu);
    window.addEventListener("keydown", disableDevToolsShortcuts);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      window.removeEventListener("keydown", disableDevToolsShortcuts);
    };
  }, []);

  return null;
}
