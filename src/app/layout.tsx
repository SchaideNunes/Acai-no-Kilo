import type { Metadata } from "next";
import { Bebas_Neue, Raleway } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Açaí no Kilo - Franquia",
  description: "Fature até 2 milhões ao ano com a franquia de Açaí que mais cresce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${raleway.variable} antialiased scroll-smooth`}>
      <body className="min-h-full font-sans bg-background text-foreground selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
