import type { Metadata } from "next"
import "@/styles/globals.css"
import { AppChrome } from "@/components/AppChrome"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Pratishek Bansal | UX/UI Design Lead",
    template: "%s - Pratishek Bansal",
  },
  description: "Senior UX Design Lead with 10+ years of experience...",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  )
}

