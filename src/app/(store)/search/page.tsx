import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/api/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const produtcs = await response.json()

  return produtcs
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>{' '}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((productInfos) => {
          return (
            <Link
              key={productInfos.id}
              href={`/product/${productInfos.slug}`}
              className="relative group flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-end"
            >
              <Image
                className="group-hover:scale-105 duration-150 transition-transform"
                src={productInfos.image}
                width={480}
                height={480}
                quality={100}
                alt={productInfos.description}
              />

              <div className="absolute bottom-10 right-12 h-12 flex items-center gap-2 max-w-[288px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                <span className="text-sm truncate">{productInfos.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  {productInfos.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
