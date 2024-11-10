import { Ubuntu } from "next/font/google";
import "./globals.css";

const font = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "For our beloved teachers",
  description: "A simple website to show our appreciation for our teachers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
