import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Didriksson Digital ENK - IT Services",
  description: "Professional IT services and digital solutions for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
