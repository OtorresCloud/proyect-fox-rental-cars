import type { Metadata } from "next";
import { Outfit } from "next/font/google";
//import { Toaster } from "sonner"
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import {
  ClerkProvider,
} from '@clerk/nextjs'

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
      <html lang="en">
        <body className={outfit.className}>
          <NextTopLoader color="#000" />
          {children}
             {/* <Toaster position="top-right" richColors /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
