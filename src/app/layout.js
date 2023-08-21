import './globals.css'
// import { Inter } from 'next/font/google'
// import Header from './components/Header/Header.jsx'
import Dash from './components/dash/Dash.jsx'
// const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <div className="home relative top-4 -z-1">
          {/* <Dash /> */}
          <div className='content w-2/3  mt-24 pb-8'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
