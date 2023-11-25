import data from '../data.json'
import { z } from 'zod'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  const slug = z.string().parse(params.slug)

  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json({ massage: 'Produto não encontrado' }, { status: 400 })
  }

  return Response.json(product)
}
