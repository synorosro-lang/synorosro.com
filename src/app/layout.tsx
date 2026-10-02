import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const displayFont = Manrope({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.synoro.eu"),
  title: {
    default: "Synoro | Wholesale, Import-Export & Trade Support",
    template: "%s | Synoro",
  },
  description:
    "Synoro connects B2B buyers, suppliers, and service partners through wholesale sourcing, import-export coordination, and trade intermediation.",
  keywords: ["B2B wholesale", "import export Slovakia", "trade intermediary", "European sourcing", "commercial trade support"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
