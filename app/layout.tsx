import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from "sonner"
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import {
  ClerkProvider,
} from '@clerk/nextjs'

import { ThemeProvider } from "next-themes";

const outfit= Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Rental",
  description: "Quiero aprobar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignOutUrl="/"
    >
      <html lang="en" suppressHydrationWarning>
        <body className={outfit.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader color="#000" />
            {children}
            <Toaster position="top-right" richColors />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}