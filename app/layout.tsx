import './globals.css'
import type { Metadata } from 'next'
import { Cairo, Poppins} from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'

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
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Leading healthcare provider offering comprehensive medical services with state-of-the-art facilities and expert care." />
        <meta name="keywords" content="hospital, healthcare, medical services, doctors, emergency care, surgery, maternity" />
        <link rel="canonical" href="https://nakowahealthcentre.org/" />
        <meta property="og:title" content="Nakowa Health Care & Medical Services" />
        <meta property="og:description" content="Leading healthcare provider offering comprehensive medical services with state-of-the-art facilities and expert care." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nakowahealthcentre.org/" />
        <meta property="og:image" content="/assets/nhc-og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nakowa Health Care & Medical Services" />
        <meta name="twitter:description" content="Leading healthcare provider offering comprehensive medical services with state-of-the-art facilities and expert care." />
        <meta name="twitter:image" content="/assets/nhc-og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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