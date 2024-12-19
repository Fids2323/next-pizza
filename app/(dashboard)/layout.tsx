import type { Metadata } from "next";
import { Header } from "../../components/shared";

export const metadata: Metadata = {
  title: "Next Pizza | Главная",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <main className="min-h-screen">
          <Header/>
          {children}
        </main>
    </html>
  );
}
