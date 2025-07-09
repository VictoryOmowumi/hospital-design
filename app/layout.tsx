import './globals.css'
import type { Metadata } from 'next'
import { Cairo, Poppins} from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const cairo = Cairo({ 
  subsets: ['latin'],
  variable: '--font-cairo',
});

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-fira',
});

export const metadata: Metadata = {
  title: 'Nakowa Health Care & Medical Services',
  description: 'Leading healthcare provider offering comprehensive medical services with state-of-the-art facilities and expert care.',
  keywords: 'hospital, healthcare, medical services, doctors, emergency care, surgery, maternity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <html lang="en">
      <body className={`${cairo.className} ${poppins.className}  bg-gradient-to-br from-[#edeef1] to-[#f6f5f1] text-onyx`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}