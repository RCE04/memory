import getProduct from "@/lib/product";

export function GET(request, { params }) {
    let product = getProduct();
    let productos = product.find(user => user.id == params.id)

    return Response.json(productos)
}

export async function PUT(request, { params }) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let product = getProduct();
    // Obtenemos posición    
    const pos = product.findIndex(product => product.id == params.id)

    // Modificamos usuario
    const newProduct = await request.json()
    product.splice(pos, 1, { id: Number(params.id), ...newProduct })

    return Response.json(product)
}


export function DELETE(request, { params }) {
    let product = getProduct();
    // Obtenemos posición    
    const pos = product.findIndex(product => product.id == Number(params.id))

    // Eliminamos usuario
    if (pos != -1)  // Si es encontrado
        product.splice(pos, 1)

    return Response.json(product)
}