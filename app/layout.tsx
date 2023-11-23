import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
  
import { Modalprovider } from '@/providers/modal-provider'

import './globals.css'
import { ToasterProvider } from '@/providers/toast-provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'admin dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider/>
        <Modalprovider/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
