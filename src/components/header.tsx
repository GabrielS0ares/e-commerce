import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link className="text-2xl font-extrabold" href="/">
          Gabu Store
        </Link>

        <SearchForm />
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />
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
