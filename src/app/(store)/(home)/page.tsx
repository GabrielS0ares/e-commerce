import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href=""
        className="group relative col-span-6 row-span-6 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 duration-300 transition-transform"
          src="/moletom-never-stop-learning.png"
          width={920}
          height={920}
          quality={100}
          alt="Imagem moletom"
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[288px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            $935
          </span>
        </div>
      </Link>
      <Link
        href=""
        className="relative group col-span-3 row-span-3 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 duration-150 transition-transform"
          src="/moletom-ia-p-devs.png"
          width={920}
          height={920}
          quality={100}
          alt="Imagem moletom"
        />

        <div className="absolute bottom-10 right-28 h-12 flex items-center gap-2 max-w-[288px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom IA P DEVS</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            $935
          </span>
        </div>
      </Link>
      <Link
        href=""
        className="relative group col-span-3 row-span-3 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 duration-150 transition-transform"
          src="/moletom-ai-side.png"
          width={920}
          height={920}
          quality={100}
          alt="Imagem moletom"
        />
        <div className="absolute bottom-10 right-28 h-12 flex items-center gap-2 max-w-[288px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom IA Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            $935
          </span>
        </div>
      </Link>
    </div>
  )
}
