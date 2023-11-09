import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/navigation/Navigation';
import ScrollComponent from './components/ScrollComponent';
import HomeLinkSection from './components/LinkSection';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Robert Recalo',
  description: 'A Web portfolio built on NextJS',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollComponent />
        <Navigation />
          <div className='w-full sm:w-7xl md:w-3/4 lg:w-1/2 mx-auto'>
            {children}
          </div>
          <div>
            <HomeLinkSection />
          </div>
        </body>
    </html>
  )
}
