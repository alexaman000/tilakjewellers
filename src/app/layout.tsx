import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tilak Jewellers - Timeless Gold, Silver & Diamond Jewellery | Since 1996",
  description:
    "Discover exquisite handcrafted Gold, Silver & Diamond jewellery at Tilak Jewellers, Greater Noida. Trusted since 1996. Hallmarked gold, certified diamonds, transparent pricing.",
  keywords:
    "gold jewellery, silver jewellery, diamond jewellery, bridal jewellery, Greater Noida, tilak jewellers, 22K gold, mangalsutra, rings, necklaces, bangles",
  authors: [{ name: "Tilak Jewellers" }],
  openGraph: {
    title: "Tilak Jewellers - Timeless Jewellery Since 1996",
    description: "Handcrafted Gold, Silver & Diamond jewellery with purity and elegance.",
    type: "website",
    locale: "en_IN",
    siteName: "Tilak Jewellers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${poppins.variable} font-poppins antialiased`}>
        <ThemeProvider>
          {children}
          <WhatsAppFloat />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
