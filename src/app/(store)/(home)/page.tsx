import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturesProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await api('/api/products/featured', {
    next: {
      revalidate: 60 * 60,
    },
  })

  const produtcs = await response.json()

  return produtcs
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturesProducts()

  return (
    <div className="grid  grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-9 lg:col-span-6 row-span-6 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 duration-300 transition-transform"
          src={highlightedProduct.image}
          width={920}
          height={920}
          quality={100}
          alt={highlightedProduct.description}
        />

        <div className="absolute bottom-28 right-4 h-12 flex items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>
      {otherProducts.map((infosProduct) => (
        <Link
          key={infosProduct.id}
          href={`/product/${infosProduct.slug}`}
          className="relative group col-span-9 lg:col-span-3 row-span-3 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-end"
        >
          <Image
            className="group-hover:scale-105 duration-150 transition-transform"
            src={infosProduct.image}
            width={920}
            height={920}
            quality={100}
            alt={infosProduct.description}
          />

          <div className="absolute bottom-10 right-4 h-12 flex items-center gap-2 max-w-[288px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{infosProduct.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {infosProduct.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
