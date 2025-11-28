"use client";

import { useEffect } from "react";

export default function ReflectiveEffect() {
  useEffect(() => {
    const logo = document.querySelector(".reflective-logo");
    if (!logo) return;

    function move(e: MouseEvent) {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      logo.setAttribute("style", `--x:${x}px; --y:${y}px`);
    }

    logo.addEventListener("mousemove", move);

    return () => logo.removeEventListener("mousemove", move);
  }, []);

  return null;
}
