import { Roboto } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "700"],
});

export const metadata = {
  title: "MAXIUS",
  description: "MAXIUS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body
        className={`${roboto.variable} antialiased`}
        style={{ fontFamily: "var(--font-roboto), sans-serif" }}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
