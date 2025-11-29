import type { Metadata } from "next";
import { Cairo, Figtree, Fira_Code, Noto_Sans_Tifinagh } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { LanguageProvider } from "@/context/language-context";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: "400",
});

export const notoTifinagh = Noto_Sans_Tifinagh({
  variable: "--font-tifinagh",
  subsets: ["tifinagh"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Abdelilah IKBI | Cloud & DevOps Portfolio",
  description:
    "Cloud & DevOps engineering student at INPT seeking an end-of-study (PFE) internship. Focused on automation, cloud-native platforms, and DevOps culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${figtree.variable} ${firaCode.variable} ${cairo.variable} ${notoTifinagh.variable} antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <div className="min-h-screen bg-black text-zinc-100 transition-colors duration-300 bg-[radial-gradient(circle_at_top,_rgba(30,64,175,0.32),transparent_65%)]">
              <ScrollProgress />
              <header className="sticky top-0 z-40 border-b border-zinc-800/70 bg-black/80 backdrop-blur-md">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  <Navbar />
                </div>
              </header>
              <main className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
