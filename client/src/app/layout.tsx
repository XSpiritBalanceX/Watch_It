import type { Metadata, Viewport } from "next";
import { Noto_Sans } from "next/font/google";
import { SITE_NAME } from "@/constants/seo.constants";
import "./globals.scss";

const zen = Noto_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-zen",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Best one for checking movies and series",
  manifest: "/manifest.json",
  icons: { apple: { url: "/icon.png" } },
  appleWebApp: {
    title: "watch it",
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
  initialScale: 1,
  width: "device-width",
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={zen.className}>{children}</body>
    </html>
  );
}
