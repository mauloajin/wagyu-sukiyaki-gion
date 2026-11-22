import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://wagyu-sukiyaki-gion.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: { google: "ayHXvvh7MAYyEd0yabm5xYrI98qeN_1bfcLkvUPkbrM" },
  title: "Wagyu Sukiyaki 祇園｜京都・木屋町",
  description: "京都・木屋町のWagyu Sukiyaki 祇園。A5ランク和牛すき焼き。火〜日11:30〜14:30・17:00〜22:00、月曜定休。京都河原町駅2B出口徒歩約3分。ご予約・電話・メニューをご案内。",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title: "Wagyu Sukiyaki 祇園", description: "京都・木屋町で味わうA5ランク和牛すき焼き。火〜日11:30〜14:30・17:00〜22:00、月曜定休。", url: siteUrl, siteName: "Wagyu Sukiyaki 祇園", locale: "ja_JP", type: "website", images: [{ url: "/images/sukiyaki.jpg", width: 640, height: 572, alt: "Wagyu Sukiyaki 祇園の和牛すき焼きセット" }] },
  twitter: { card: "summary_large_image", title: "Wagyu Sukiyaki 祇園", description: "京都・木屋町の和牛すき焼き店" }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ja"><body>{children}</body></html>; }
