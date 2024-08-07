import type { Metadata } from "next";
import { Inter, Archivo_Black } from 'next/font/google'
import "./globals.css";
import CustomHeader from "@/components/customHeader";



export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "escolha seu inicial",
  description: "esse projeto foi sdesenvolvimdo com objetivo de colocar em pratica oque apredi estudando animações.",
  icons: "/src/app/favicon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="favicon.png" sizes="any" type="image/png"/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
