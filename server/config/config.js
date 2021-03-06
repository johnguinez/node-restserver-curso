//================================================
// Puerto
//================================================
process.env.PORT = process.env.PORT || 3000

//================================================
// Entorno
//================================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//================================================
// Vencimiento del token
//================================================
// 60 segundos
// 60 minutos
// 24 Hrs
// 30 dias
//process.env.CADUCIDAD_TOKEN = process.env.CADUCIDAD_TOKEN || "60 * 60 * 24 * 30";
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//================================================
// SEED de autentificación
//================================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//================================================
// Base de Datos
//================================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    //urlDB = process.env.MONGO_URI;
    urlDB = 'mongodb+srv://striker:mLBIfhMpkHkV3ha1@cluster0-a04ju.mongodb.net/cafe';
}

process.env.URLDB = urlDB;