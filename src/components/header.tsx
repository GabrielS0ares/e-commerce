import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link className="text-2xl font-extrabold" href="/">
          Gabu Store
        </Link>

        <form className="flex w-[320px] items-center gap-3 rounded-full py-3 px-5 bg-zinc-900 ring-zinc-700">
          <Search className="w-5 h-5 text-zinc-500" />
          <input
            placeholder="Buscar Produtos"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4" />
          <span className="text-sm">Card(0)</span>
        </div>
        <div className="w-px h-4 bg-zinc-700" />
        <Link className="flex items-center gap-2 hover:underline" href="">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/gabrielS0ares.png"
            width={24}
            height={24}
            className="w-6 h-6 rounded-full"
            alt="Avatar do GitHub"
          />
        </Link>
      </div>
    </div>
  )
}
