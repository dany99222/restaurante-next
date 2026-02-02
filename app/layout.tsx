import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Carcateristicas de la fuente 
const font = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Restaurante",
  description: "Restaurante app Next.js con App Router y Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${font.className} text-black bg-neutral-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
