import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: `Gabu's Store`,
  description:
    'Bem vindo a maior loja de vendas de artigos maneiros do meu quarto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${inter.variable} antialiased`} lang="pt">
      <body className="bg-zinc-950 text-zinc-50">{children}</body>
    </html>
  )
}
