import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const descricao =
  "O Game Jam é um torneio de programação de jogos organizado pelo PET Engenharia de Computação da UFES.";

export const metadata: Metadata = {
  // Sem metadataBase o Next resolve as URLs de imagem contra localhost, e a
  // prévia do link sai quebrada fora da máquina de quem construiu.
  metadataBase: new URL("https://gamejam.pet.inf.ufes.br"),
  title: "PET Game Jam",
  description: descricao,
  // Sem isto, o link colado no WhatsApp ou no Instagram aparece sem imagem e
  // sem texto nenhum — e divulgação é metade do evento.
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "PET Game Jam",
    title: "PET Game Jam",
    description: descricao,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "PET Game Jam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PET Game Jam",
    description: descricao,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster 
          position="bottom-right"
        />
        {children}
      </body>
    </html>
  );
}
