import getProduct from "@/lib/product";

export function GET() {
    let product = getProduct();
    return Response.json(product)
}


export async function POST(request) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let product = getProduct();
    let sig = Math.max(...product.map(u => u.id)) + 1

    const newUser = await request.json()
    product.push({ id: sig, ...newUser })
    return Response.json(product)
}

