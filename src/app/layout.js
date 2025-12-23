import { Quicksand } from "next/font/google";
import "./globals.css";
import AOSInitializer from "@/components/common/AOSInitializer";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "MASHARIQ-AL-ARKAN | Building Maintenance, Automation & Security Solutions",
  description: "MASHARIQ-AL-ARKAN provides professional building maintenance, automation and access control systems, parking management, security and surveillance solutions, networking infrastructure, and wireless connectivity services for residential, commercial, and industrial projects."
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
      <AOSInitializer />
       {children}
      </body>
    </html>
  );
}
