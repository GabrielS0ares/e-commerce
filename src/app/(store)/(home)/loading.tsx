import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="col-span-9 lg:col-span-6 row-span-6 h-[400px] md:h-[600px] lg:h-[850px]" />
      <Skeleton className="col-span-9 lg:col-span-3 row-span-6 lg:row-span-3 h-[400px] md:h-[600px]" />
      <Skeleton className="col-span-9 lg:col-span-3 row-span-6 lg:row-span-3 h-[400px] md:h-[600px]" />
    </div>
  )
}
