import { Header, Footer, Analyst } from "@/shared";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://zeynepbas.dev"), 
  alternates: {
    canonical: "https://zeynepbas.dev"
  },
  title: {
    template: `%s | Zeynep Baş`,
    default: `Zeynep Baş - Mid Frontend Developer`
  },
  description:
    "React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiren Mid frontend geliştirici Zeynep Baş'ın portföy sitesi.",
  keywords: [
    "Frontend",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Zeynep Baş",
    "Mid Frontend Developer"
  ],
  authors: [
    {
      name: "Zeynep Baş",
      url: "https://zeynepbas.dev"
    }
  ],
  creator: "Zeynep Baş",

  openGraph: {
    title: "Zeynep Baş - Mid Frontend Developer",
    description:
      "React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiren Mid frontend geliştirici Zeynep Baş'ın portföy sitesi.",
    url: "https://zeynepbas.dev",
    siteName: "Zeynep Baş",
    type: "website",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Zeynep Baş - Mid Frontend Developer"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Zeynep Baş - Mid Frontend Developer",
    description:
      "React ve Next.js ile modern web uygulamaları geliştiren Mid frontend developer.",
    images: ["/images/og.png"]
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
