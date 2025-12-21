import "./globals.css"
import { Titillium_Web, Orbitron, Alfa_Slab_One } from 'next/font/google'

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['400','600','700'],
  variable: '--font-titill',
  display: 'swap',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  weight:['400','500','700','900'],
  variable: '--font-orbit',
  display: 'swap',
})

const alfaslabone = Alfa_Slab_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alfaslab1',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${titillium.variable} ${orbitron.variable} ${alfaslabone.variable}`}>
      <body className="relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
