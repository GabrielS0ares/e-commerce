import Image from 'next/image'

export default function ProductPage({ params }) {
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="http://github.com/gabrielS0ares.png"
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl justify-center leading-tight">Avatar</h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          A descrição de um produto{' '}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block px-5 py-2.5 rounded-full bg-violet-500">
            321321
          </span>
          <span className="text-sm text-zinc-400">12x sem juros de 1</span>
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
