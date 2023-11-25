import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { Metadata } from 'next'
import Image from 'next/image'

interface ProducProps {
  params: {
    slug: string
  }
}

async function getProducts(slug: string): Promise<Product> {
  const response = await api(`/api/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const produtc = await response.json()

  return produtc
}

export async function generateMetadata({
  params,
}: ProducProps): Promise<Metadata> {
  const produtc = await getProducts(params.slug)

  return {
    title: produtc.title,
    description: produtc.description,
  }
}

export default async function ProductPage({ params }: ProducProps) {
  const produtc = await getProducts(params.slug)

  function installmentValue(term: number, value: number) {
    return value / term
  }

  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={produtc.image}
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl justify-center leading-tight">
          {produtc.title}
        </h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          {produtc.description}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block px-5 py-2.5 rounded-full bg-violet-500">
            {produtc.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            12x sem juros de{' '}
            {installmentValue(12, produtc.price).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
        <div className="mt-8 space-y-4 ">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-700 font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-700 font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-700 font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-700 font-semibold"
            >
              XG
            </button>
          </div>
        </div>
        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  )
}
