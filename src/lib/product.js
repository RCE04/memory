let seed = [
    { id: 1, nombre: "Desodorante", precio: 20 },
    { id: 2, nombre: "esponja", precio: 21 },
    { id: 3, nombre: "estrella", precio: 22 },
    { id: 4, nombre: "algo", precio: 23 },
]

let product = null;

export default function getProduct() {
    // if (users)
    //     return users;
    // if (!global._users) {
    //     users = seed;
    //     global._users = users;
    // } else {
    //     users = global._users;
    // }

    // Sólo cargamos valores iniciales una sóla vez
    if (!product)
        product = seed;

    return product;
}

