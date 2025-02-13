import Servicio from '../servicio/upload.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    recibirArchivo = async (req, res) => {
        const file = req.file
        //console.log(file)
        const urlFotoFTP = await this.servicio.guardarArchivoFTP(file)

        res.json({ urlFoto: urlFotoFTP })
    }
}

export default Controlador