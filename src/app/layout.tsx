"use client"
import './globals.css'
import Navbar from "./components/navbar/navbar"
import { Provider } from 'react-redux'
import { store } from "./redux/store"
import { CookiesProvider } from 'react-cookie';
import { motion } from 'framer-motion'
import { SessionProvider } from "next-auth/react";
import { SkeletonTheme } from "react-loading-skeleton";

export const metadata = {
  title: 'Personal Website - Mario Raach',
  description: 'Personal Webiste of Mario Raach from Germany',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <SkeletonTheme baseColor="#d9d9d9">
        <SessionProvider>
          <Provider store={store}>
            <CookiesProvider>
              <Navbar />
              {children}
            </CookiesProvider>
          </Provider>
        </SessionProvider>
        </SkeletonTheme>
      </body>
    </html>
  );
}