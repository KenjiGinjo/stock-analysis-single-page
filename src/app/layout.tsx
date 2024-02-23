import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ComposeProviders from "@/providers/ComposeProviders";
import AppThemeProvider from "@/providers/ThemeProvider";
import AppLayout from "@/layouts/AppLayout";
import CONST from "@/CONST";
import ReactQueryProviders from "@/providers/ReactQueryProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "斯塔克科技",
  description: "斯塔克科技是一家",
  generator: "Next.js",
  applicationName: CONST.APP_NAME,
  referrer: "origin-when-cross-origin",
  keywords: ["关键字1", "关键字2", "关键字3"],
  authors: [
    { name: "KenjiGinjo" },
    { name: "KenjiGinjo", url: "https://www.kenjiginjo.com/" },
  ],
  creator: "KenjiGinjo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={inter.className}>
        <ComposeProviders components={[ReactQueryProviders, AppThemeProvider]}>
          <AppLayout>{children}</AppLayout>
        </ComposeProviders>
      </body>
    </html>
  );
}
