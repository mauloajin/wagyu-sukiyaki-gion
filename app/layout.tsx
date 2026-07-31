import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://wagyu-sukiyaki-gion.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "WAGYU SUKIYAKI GION｜和牛すき焼き 祇園｜京都・木屋町",
  description: "京都・木屋町のWAGYU SUKIYAKI GION｜和牛すき焼き 祇園。京都河原町駅徒歩1分、祇園四条駅徒歩3分。火〜土11:45〜14:15・17:00〜22:00。鴨川を望むルーフトップでもお食事を楽しめます。",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title: "WAGYU SUKIYAKI GION｜和牛すき焼き 祇園", description: "京都・木屋町で味わう和牛すき焼き。鴨川と京都の街並みを望むルーフトップも。", url: siteUrl, siteName: "WAGYU SUKIYAKI GION｜和牛すき焼き 祇園", locale: "ja_JP", type: "website" },
  twitter: { card: "summary", title: "WAGYU SUKIYAKI GION｜和牛すき焼き 祇園", description: "京都・木屋町の和牛すき焼き店" }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ja"><body>{children}</body></html>; }
