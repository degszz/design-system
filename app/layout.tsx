import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header'

export const metadata: Metadata = {
  title: 'Design System',
  description: 'Project personal.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='bg-black-50 dark:bg-black-950'>
        <Header />
        {children}
      </body>
    </html>
  )
}
