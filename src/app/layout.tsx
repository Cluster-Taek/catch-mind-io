import './globals.css';
import CoreProvider from '@/contexts/core-provider';
import { css } from '@/styled-system/css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

dayjs.locale('ko');

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Catchmind io',
  description: 'Catchmind io',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} font-sans`}>
        <h1
          className={css({
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '0',
            padding: '1rem',
          })}
        >
          Catchmind io
        </h1>
        <CoreProvider>{children}</CoreProvider>
      </body>
    </html>
  );
}
