"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  const HIDDEN_ROUTES = [
    "/login",
    "/userSelect",
  ];


  const hide = HIDDEN_ROUTES.some(route => pathname.startsWith(route));

  if (hide) return null;

  return <Footer />;
}
