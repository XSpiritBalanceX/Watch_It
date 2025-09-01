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
  icons: {
    icon: "icons/favicon.ico",
    apple: { url: "icons/180.png", sizes: "180x180" },
    other: [
      {
        rel: "apple-touch-icon",
        url: "icons/120.png",
        sizes: "120x120",
      },
      {
        rel: "apple-touch-icon",
        url: "icons/152.png",
        sizes: "152x152",
      },
      {
        rel: "apple-touch-icon",
        url: "icons/167.png",
        sizes: "167x167",
      },
      {
        rel: "apple-touch-icon",
        url: "icons/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "icon",
        url: "icons/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "icons/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },
  appleWebApp: {
    title: "my take",
    statusBarStyle: "black-translucent",
    capable: true,
    startupImage: [
      {
        url: "icons/st-s-640x1136.png",
        media:
          "(device-width: 640px) and (device-height: 1136) and (-webkit-device-pixel-ratio:2)",
      },
      {
        url: "icons/st-s-750x1334.png",
        media:
          "(device-width: 750px) and (device-height: 1334px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "icons/st-s-1242x2208.png",
        media:
          "(device-width: 1242px) and (device-height: 2208px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "icons/st-s-1125x2436.png",
        media:
          "(device-width: 1125px) and (device-height: 2436px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "icons/st-s-828x1792.png",
        media:
          "(device-width: 828px) and (device-height: 1792px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "icons/st-s-1242x2688.png",
        media:
          "(device-width: 1242px) and (device-height: 2688px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "icons/st-s-1284x2778.png",
        media:
          "(device-width: 1284px) and (device-height: 2778px) and (-webkit-device-pixel-ratio: 3)",
      },
    ],
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
