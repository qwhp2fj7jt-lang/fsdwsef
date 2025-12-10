import { Header, Footer, Analyst } from "@/shared";
import "./globals.css";


export const metadata = {
  metadataBase: new URL("https://zeynepbas.dev"), 
  alternates: {
    canonical: "https://zeynepbas.dev"
  },
  title: {
    template: `%s | Zeynep Bas`,
    default: `Zeynep Bas - Mid Frontend Developer`
  },
  description: "React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiren Mid frontend geliştirici Zeynep Bas'ın portföy sitesi.",
  keywords: ["Frontend", "React", "Next.js", "TypeScript", "Tailwind CSS", "Zeynep Bas", "Mid Frontend Developer"],
  authors: [
    {
      name: "Zeynep Bas",
      url: "https://zeynepbas.dev"
    }
  ],
  creator: "Zeynep Bas",
  openGraph: {
    siteName: "Zeynep Bas",
    url: "/",
    type: "website",
    firstName: "Zeynep",
    lastName: "Bas",
    username: "zeynepbas",
    images: [
      {
        url: "/images/avatar.jpeg",
        width: 100,
        height: 100,
        alt: "Zeynep Bas - Mid Frontend Developer"
      }
    ]
  }
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
