import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Manrope } from "@next/font/google";
import Header from "../../components/header";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
  title: "Visitca",
  description: "visitca, visitca.uz, visitca uz, visitcauz",
};
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages({ locale });
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="../../../public/svgs/logo.svg" sizes="any" />
      </head>
      <body className={`${manrope.className} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
