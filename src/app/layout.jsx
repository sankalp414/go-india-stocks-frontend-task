import '@/styles/globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`text-text bg-bg scroll-smooth ${inter.className} h-screen overflow-hidden`}
      >
        
        {children}
      </body>
    </html>
  );
}
