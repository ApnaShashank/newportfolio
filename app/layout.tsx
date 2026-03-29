import type { Metadata } from "next";
import { Newsreader, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SHASHANK GUPTA | Creative Developer & Digital Architect",
  description: "Official portfolio of SHASHANK GUPTA (APNASHASHANK). Specializing in high-performance web architecture, kinetic digital experiences, and creative engineering.",
  keywords: ["SHASHANK GUPTA", "APNASHASHANK", "Creative Developer", "Frontend Engineer", "Next.js", "Portfolio", "Web Architect"],
  authors: [{ name: "SHASHANK GUPTA" }],
  icons: {
    icon: "https://ik.imagekit.io/DEMOPROJECT/b41c9a4a-27fd-4a8b-a355-a79be19cf9fa.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shashankguptadot.vercel.app/", // Placeholder, adjust if needed
    title: "SHASHANK GUPTA | Creative Developer",
    description: "Modern digital experiences and high-performance web architecture by SHASHANK gupta.",
    siteName: "SHASHANK GUPTA Portfolio",
    images: [
      {
        url: "https://ik.imagekit.io/DEMOPROJECT/b41c9a4a-27fd-4a8b-a355-a79be19cf9fa.png",
        width: 1200,
        height: 630,
        alt: "SHASHANK GUPTA Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHASHANK GUPTA | Creative Developer",
    description: "Official portfolio of SHASHANK GUPTA (APNASHASHANK).",
    images: ["https://ik.imagekit.io/DEMOPROJECT/b41c9a4a-27fd-4a8b-a355-a79be19cf9fa.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LenisProvider>
          <CustomCursor />
          <main className="flex-grow">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
