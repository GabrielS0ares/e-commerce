import { NextRequest } from 'next/server'
import data from '../data.json'

import { z } from 'zod'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) => {
    return product.title.toLocaleUpperCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}
