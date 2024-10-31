const model = require('./model')

async function insertar_usuario(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_usuario(dato) {
     let filter = {}
     
     if (dato.username) {
        filter = { username: dato.username }        
     } 
     const resultado = await model.find( filter )     
     return resultado
}

module.exports = {
    insertar:insertar_usuario,
    obtener:obtener_usuario,
}