import { Inter } from 'next/font/google'
import './globals.css'
import { StyledEngineProvider } from '@mui/material'
// import Providers from './providers'
import Navbar from './components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aquarium Parameter Tracker',
  description: 'Test and view aquarium water parameters',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="root">
      <body className={inter.className}>
        <Navbar />
        <StyledEngineProvider>
            {/* <Providers> */}
            {children}
            {/* </Providers> */}
        </StyledEngineProvider>
      </body>
    </html>
  )
}