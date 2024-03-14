import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'pumasER@sers gui',
  description: 'pumasER@sers gui tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
