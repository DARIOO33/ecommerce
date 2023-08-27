import './globals.css'
// import { Inter } from 'next/font/google'
import Header from './components/Header/Header.jsx'
import Image from "next/image"
import Dash from './components/dash/Dash.jsx'
// const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'E-Commerce Projet By Dario ',
  description: 'E-commerce project using next js framework and tailwind css , hosted by vercel',
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Header />
        <div className="home relative top-4 -z-1">
          {/* <Dash /> */}
          {children}
        </div>
      </body>
    </html>
  )
}
