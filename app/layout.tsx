import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Footer, Header } from "@/components";
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Приём металлолома в Пущино — актуальные цены, вывоз, скупка | Металлолом Пущино",
  description: "Приём металлолома в Пущино по высоким ценам. Онлайн калькулятор, актуальная таблица цен, приём черного и цветного лома. Работаем с частными и юридическими лицами. Адрес и контакты на карте.",
  other: {
    'yandex-verification': '1c164513301f1ee9',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
		<Header />
        	{children}
			 <Toaster position="top-center" reverseOrder={false} /> {/* вот это обязательно */}
		<Footer />
      </body>
    </html>
  );
}
