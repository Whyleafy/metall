import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Footer, Header } from "@/components";
import { Toaster } from 'react-hot-toast';


const inter = Inter({
  variable: "--font-inter",
	display: 'swap',
  subsets: ["latin"],
});



export const metadata: Metadata = {
  other: {
    'yandex-verification': '53ddd28ec09f8889',
		'google-site-verification': 'spFgbOGRUx1vZ1_D7gbkF9OoZV3HkRv64FIIROtxOVc',
  },
	icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable}`}>
			<Header />
        	{children}
			 <Toaster position="top-center" reverseOrder={false} /> 
			<Footer />
      </body>
    </html>
  );
}
