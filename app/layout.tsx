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
  title: "APNASHASHANK | Creative Developer & Digital Architect",
  description: "Portfolio of Shashark (APNASHASHANK), a Creative Developer specializing in high-performance web architecture and kinetic digital experiences.",
  keywords: ["Creative Developer", "Frontend Engineer", "Next.js", "Framer Motion", "Portfolio", "APNASHASHANK", "Shashank Gupta", "TypeScript", "React"],
  authors: [{ name: "Shashank Gupta" }],
  icons: {
    icon: "https://ik.imagekit.io/DEMOPROJECT/04469356-9593-4667-9250-025b884ccb23.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "APNASHASHANK | Creative Developer",
    description: "Portfolio of Shashark, a Creative Developer specializing in high-performance web architecture and digital experiences.",
    siteName: "ApnaShashank Portfolio",
    images: [
      {
        url: "https://ik.imagekit.io/DEMOPROJECT/04469356-9593-4667-9250-025b884ccb23.png",
        width: 1200,
        height: 630,
        alt: "APNASHASHANK Portfolio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APNASHASHANK | Creative Developer",
    description: "Modern portfolio of Shashark.",
    images: ["https://ik.imagekit.io/DEMOPROJECT/04469356-9593-4667-9250-025b884ccb23.png"],
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
