import type { Metadata } from "next";
import "./globals.css";
import CustomHeader from "@/components/customHeader";
import { inter } from "./fonts";


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
