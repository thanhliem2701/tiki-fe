import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Header, Footer } from '@/components/shared';
//import { SessionProvider } from 'next-auth/react';
import SessionWrapper from '@/providers/SessionWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tiki - Mua hàng giá tốt, hàng chuẩn, ship nhanh',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.png' />
      <body className={inter.className}>
        <SessionWrapper>
        <Header />
        <main className='flex justify-center flex-col mt-5 w-full'>
          <div className='w-full flex justify-center flex-col items-center ml-0'>
            {children}
          </div>
        </main>

        <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
