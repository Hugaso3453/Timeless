import "./globals.css";
import Header from "@/components/Header";
import { SidebarProvider } from "@/context/SidebarContext";
import Sidebar from "@/components/Sidebar";
import "leaflet/dist/leaflet.css";

export const metadata = {
  title: "Timeless",
  description: "TFG Dealership App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <Header />
          <Sidebar />
          <main className="relative">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}