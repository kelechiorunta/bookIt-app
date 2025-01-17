import { Inter, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: '400' });
const open_sans = Open_Sans({ subsets: ['hebrew'], weight: '400' });


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black ${open_sans.className}`}>
        {children}
      </body>
    </html>
  );
}
