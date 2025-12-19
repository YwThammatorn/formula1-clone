import "./globals.css"
import { Titillium_Web } from 'next/font/google'
import { Orbitron } from 'next/font/google'

import Navbar from "@/components/Navbar"

const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['400','600','700'],
  variable: '--font-titill',
  display: 'swap',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  weight:['400','500'],
  variable: '--font-orbit',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${titillium.variable} ${orbitron.variable}`}>
      <body className="relative">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
