import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ArenaHub",
  description: "ArenaHub is a modern sports facility booking platform where you can book football fields, cricket grounds, badminton courts, and other sports venues easily.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Toaster richColors position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
