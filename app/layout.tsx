import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Movie Search App',
  description: 'Busca tus películas favoritas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
};
