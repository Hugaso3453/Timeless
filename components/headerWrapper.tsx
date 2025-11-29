"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function HeaderWrapper() {

  const HIDDEN_ROUTES = [
    "/login",
    "/userSelect",
  ];

  const pathname = usePathname();
  const hide = HIDDEN_ROUTES.some(route => pathname.startsWith(route));

  if (hide) return null;

  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}
