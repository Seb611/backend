import dotenv from 'dotenv'

dotenv.config()
//console.log(process.env)

const PORT = process.env.PORT || 8080
const MODO_PERSISTENCIA =  process.env.MODO_PERSISTENCIA || 'MEM'     // 'MEM' - 'FILE' - 'MONGODB'
const STRCNX =  process.env.STRCNX || 'mongodb://localhost:27017'
const BASE = process.env.BASE || 'test'
const FTP_HOST = process.env.FTP_HOST || ''
const FTP_USER = process.env.FTP_USER || ''
const FTP_PASS = process.env.FTP_PASS || ''
const FTP_DST = process.env.FTP_DST || ''
const MP_AccessToken = process.env.MP_AccessToken || ''

export default {
    PORT,
    MODO_PERSISTENCIA,
    STRCNX,
    BASE,
    FTP_HOST,
    FTP_USER,
    FTP_PASS,
    FTP_DST,
    MP_AccessToken
}