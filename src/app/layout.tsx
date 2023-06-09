"use client"
import './globals.css'
import Navbar from "./components/navbar/navbar"
import { Provider } from 'react-redux'
import { store } from "./redux/store"
import { SkeletonTheme } from "react-loading-skeleton";

{/** 
export const metadata = {
  title: 'Personal Website - Mario Raach',
  description: 'Personal Webiste of Mario Raach from Germany',
}
*/}

export default function RootLayout(
  { children }: { children: React.ReactNode }
) {
  return (
      <html lang="en">
        <body>
          <SkeletonTheme baseColor="#d9d9d9">
            <Provider store={store}>
              <Navbar />
              {children}
            </Provider>
          </SkeletonTheme>
        </body>
      </html>
  );
}
