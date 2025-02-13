import ModelFile from "./productosFile.js";
import ModelMongoDB from "./productosMongoDB.js";
import ModelMem from "./productosMem.js";

class ModelFactory {
    static get(tipo) {
        switch (tipo) {
            case 'MEM':
                console.log('*** Productos: Persistiendo en Memoria ***')
                return new ModelMem()

            case 'FILE':
                console.log('*** Productos: Persistiendo en fileSystem ***')
                return new ModelFile()

            case 'MONGODB':
                console.log('*** Productos: Persistiendo en MONGODB ***')
                return new ModelMongoDB()

            default:
                console.log('*** Productos: Persistiendo en Memoria (default) ***')
                return new ModelMem()
        }
    }
}

export default ModelFactory