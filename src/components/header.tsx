import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'
import { Suspense } from 'react'

export function Header() {
  return (
    <div className="flex md:items-center items-start justify-between">
      <div className="flex md:flex-row flex-col md:items-center items-start gap-5">
        <Link className="text-2xl font-extrabold" href="/">
          Gabu Store
        </Link>
        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="w-px h-4 bg-zinc-700" />
        <Link className="flex items-center gap-2 hover:underline" href="">
          <span className="text-sm hidden md:block">Account</span>
          <div>
            <Image
              src="https://github.com/gabrielS0ares.png"
              width={24}
              height={24}
              className="w-6 h-6 rounded-full"
              alt="Avatar do GitHub"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
