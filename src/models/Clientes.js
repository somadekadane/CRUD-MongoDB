/**
 * modelo de dados para construção das coleções ("Tabelas")
 * Clientes
 */

//Importação dos recursos do Frameword mongoose
const { model, Schema } = require('mongoose')

// Criação da estrutura da coleção Clientes

const clienteSchema = new Schema({
    nomeCliente: {
        type: String
    },
    foneCliente: {
        type: String
    },
    cpf: {
        type: String,
        unique: true,
        index: true
    }
})
// exportar para o main o modelo de dados
// Obs; Cliente sera o nome da coleção
module.exports = model('Clientes', clienteSchema)