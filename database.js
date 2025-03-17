/**
 * Módulo de conaxão com o banco de dados
 * Uso do frameword mongoose
 */

// importação do mongoose
const mongoose = require('mongoose')

// configuração do acesso ao banco de dados
// ip ou link - autenticação / usuario e senha
// Obs: Atlas(obter via compass)
// para criar um banco de dados pesonalizado no final da string da url (ex: dbclientes)
const url ='mongodb+srv://admin:123Senac@projetonode.d0d37.mongodb.net/dbclientes'

//criar uma variavel de apoio pra validação
let conectado = false

// método para conectar o bando de dados
// async - exercutar a função de forma assincrona
const conectar = async () => {
    // validação (se não estiver conactado, conectar)
       if (!conectado) {
        // conectar com o banco de dados
        // try catch - tratamento de exceções
        try {
            await mongoose.connect(url)
            conectado = true // setar a variável
            console.log("MongoDB conectado")
        } catch (error) {
            //console.log(error)
            // se o codigo se erro = 8000 (autenticão)
            if(error.code = 8000) {
                console.log("Erro de autenticação")
            } else {
                console.log(error)
            }
        }
    }
}

// metodo para desconectar o bando de dados
const desconectar = async () => {
    // validação (se estiver conactado, desconectar)
       if (conectado) {
        // desconectar com o banco de dados
        
        try {
            await mongoose.disconnect(url) //desconectar
            conectado = false // setar a variavel
            console.log("MongoDB desconectado")
        } catch (error) {
            console.log(error)
        }
    }
}
// exportar para o main os método conectar e desconectar
module.exports = { conectar, desconectar }