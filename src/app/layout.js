import { Header, Footer, Analyst } from "@/shared";
import "./globals.css";

export const metadata = {
  title: "Zeynep Bas | Frontend Developer",
  description:
    "React, TypeScript, Tailwind CSS ve modern web teknolojileriyle projeler geliştiren Frontend Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-black text-black dark:text-white">
        <Analyst />
        <Header />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
