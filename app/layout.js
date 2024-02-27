import AuthProvider from './components/authProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Motion',
  description: 'MotionInc'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

     
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>      
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Calligraffitti"/>
      </head>

      <AuthProvider>
      <body className={inter.className}> 
         {children}
      </body>
      </AuthProvider>  
            
    </html>
  )
}
