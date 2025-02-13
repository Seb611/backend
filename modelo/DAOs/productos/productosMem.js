class ModelMem {

    constructor() {
        this.productos = [
            {
                nombre: "Towels",
                precio: "80.00",
                stock: 77,
                marca: "Outdoors",
                categoria: "Oriental Wooden Car",
                detalles: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
                envio: false,
                foto: "https://loremflickr.com/640/480/business",
                id: "1"
            },
            {
                nombre: "Chicken",
                precio: "836.00",
                stock: 81,
                marca: "Health",
                categoria: "Practical Wooden Gloves",
                detalles: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
                envio: true,
                foto: "https://loremflickr.com/640/480/abstract",
                id: "2"
            },
            {
                nombre: "Towels",
                precio: "499.00",
                stock: 90,
                marca: "Health",
                categoria: "Generic Plastic Sausages",
                detalles: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
                envio: false,
                foto: "https://loremflickr.com/640/480/food",
                id: "3"
            }
        ]
    }

    obtenerProductos = async () => this.productos
    
    obtenerProducto = async id => {
        const producto = this.productos.find(p => p.id === id)
        return producto || {}
    }
    
    guardarProducto = async producto => {
        producto.id = String(+(this.productos[this.productos.length-1]?.id || 0) + 1)
        this.productos.push(producto)
        return producto
    }
    
    actualizarProducto = async (id, producto) => {
        producto.id = id

        const index = this.productos.findIndex(p => p.id === id)
        const productoAnt = this.productos.find(p => p.id === id)
        const productoNuevo = {...productoAnt, ...producto}
        this.productos.splice(index, 1, productoNuevo)

        return productoNuevo
    }
    
    borrarProducto = async id => {
        let productoEliminado = {}
        const index = this.productos.findIndex(p => p.id === id)

        if(index != -1) {
            productoEliminado = this.productos.splice(index, 1)[0]
        }

        return productoEliminado
    }
}

export default ModelMem