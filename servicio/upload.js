import config from '../config.js'

import { Client } from "basic-ftp"
import fs from 'fs'


class Servicio {
    guardarArchivoFTP = async file => {
        const urlFotoFTP = await this.subirArchivoFTP(file)
        return urlFotoFTP
    }

    subirArchivoFTP = async file => {
        //await new Promise(r => setTimeout(r,2000))
        //return `http://localhost:${config.PORT}/uploads/${file.filename}`

        const client = new Client()
        client.ftp.verbose = false

        try {
            await client.access({
                host: config.FTP_HOST,
                user: config.FTP_USER,
                password: config.FTP_PASS,
                secure: false
            })
            console.log('\n******* FTP Connection OK ********')

            //console.log(file)
            
            // subo la foto local al servidor FTP
            console.log('Subiendo archivo por FTP...')
            const src = file.path
            const dst = `${config.FTP_DST}/${file.filename}`
            await client.uploadFrom(src, dst)
            console.log('-> Upload OK!')

            // borro la foto temporal del servidor
            await fs.promises.unlink(src)

            client.close()

            return `https://danielsanchez.com.ar/uploads/${config.FTP_DST}/${file.filename}`
        }
        catch (err) {
            console.log('Error de Connection FTP', err.message)
            
            client.close()
            return ''
        }
    }
}

export default Servicio