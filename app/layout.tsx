import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Footer, Header } from "@/components";
import { Toaster } from 'react-hot-toast';
import Head from "next/head";

const inter = Inter({
  variable: "--font-inter",
	display: 'swap',
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Приём металлолома в Пущино — актуальные цены, вывоз, скупка | Металлолом Пущино",
  description: "Приём металлолома в Пущино по высоким ценам. Актуальная таблица цен, приём черного и цветного лома. Адрес и контакты на карте.",
	keywords: [
    "прием металлолома Пущино",
		"Металлалом пущино",
    "скупка металла дорого",
    "цены на металлолом",
    "черный и цветной металл",
    "прием лома Пущино",
    "металлобаза",
    "сдать металл",
  ],
  other: {
    'yandex-verification': '1c164513301f1ee9',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
			<Head> {/* Добавляем Head компонент */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body className={`${inter.variable}`}>
		<Header />
        	{children}
			 <Toaster position="top-center" reverseOrder={false} /> 
		<Footer />
      </body>
    </html>
  );
}
