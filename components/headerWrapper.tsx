"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const hide = pathname.startsWith("/login");

  if (hide) return null;

  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}
