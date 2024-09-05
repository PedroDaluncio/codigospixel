import "./styles/globals.css"

import {Montserrat} from 'next/font/google'

const fontGeral = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title : 'Jojos- a melhor loja arcade'
}
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
}

export default function RootLayout({children}){
  return (
      <html>
        <body className={fontGeral.className}>
          {children}
        </body>
      </html>
      )
}

