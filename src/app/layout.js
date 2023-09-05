import './globals.css'
import Header from './components/Header/Header.jsx'
import Image from "next/image"
import Dash from './components/dash/Dash.jsx'
import { GlobalProvider } from './GlobalProvider'
// const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'E-Commerce Projet By Dario ',
  description: 'E-commerce project using next js framework and tailwind css , hosted by vercel',
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <GlobalProvider>

          <Header />

          <div className="home relative  -z-1">
            {children}
            {/* <Dash /> */}

          </div>
        </GlobalProvider>
      </body>
    </html >
  )
}
