import { Montserrat, Roboto } from "next/font/google";
import 'remixicon/fonts/remixicon.css';
import "./globals.scss";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100","200","500","600","700","800"]
});

const roboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["100","300","400", "500", "700"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}