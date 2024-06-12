import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "lab3/components/shared/navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/><br/>
      {children}
      </body>
    </html>
  );
}