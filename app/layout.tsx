import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ating Tahanan Private House",
  description:
    "Enjoy a serene stay at our private house near stunning waterfalls and pristine beaches. Close to the market, we offer guided tours, delicious breakfast, lunch, and dinner, and convenient van services for a perfect getaway.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Navbar />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
