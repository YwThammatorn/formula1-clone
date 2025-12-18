import "./globals.css"
import { Titillium_Web } from 'next/font/google'

import Navbar from "@/components/Navbar"

const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-f1',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={titillium.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
