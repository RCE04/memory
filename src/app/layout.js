import './globals.css'
import { product } from "@/lib/product";

export const metadata = {
  title: 'Next API',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
