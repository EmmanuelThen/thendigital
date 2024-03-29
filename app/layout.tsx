import './globals.css'
import { Inter } from 'next/font/google'
import { AvatarProvider } from '@/context/AvatarContext'
import { createClient } from '@supabase/supabase-js';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ThenDigital',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
      className={`${inter.className} scroll-smooth`}
    >
      <body>
          <main className='grow'>
            {children}
          </main>
      </body>
    </html>
  )
}
