import type { Metadata } from "next";
import "./globals.css";
import { FitLogProvider } from "@/context/FitLogContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "A dark, no-nonsense workout library and daily plan tracker."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <div className="app-shell">
            <Navbar />
            {children}
            <Footer />
          </div>
          <ToastProvider />
        </FitLogProvider>
      </body>
    </html>
  );
}
