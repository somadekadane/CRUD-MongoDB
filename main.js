/**
 * processo principal 
 * \estudo do banco dados MongoDB (CRUD)
 * @author Eder Silva
 */

// importação do modulo conexão
const { conectar, desconectar } = require('./database.js')

//importação do modelo de dados do cliente
const clienteModel = require('./src/models/Clientes.js')

// função para cadastrar um novo modelo
// Atenção! Pra trabalhar com banco de dados usa async
const salvarCliente = async (nomeCli, foneCli, cpfCli) => {
    try {
        //setar a estrutura de dados com os valores
        //Obs: usar os mesmo nomes da estrutura
        const novoCliente = new clienteModel ({
            nomeCliente: nomeCli,
            foneCliente: foneCli,
            cpf: cpfCli
        })
        // a linha abaixo salva os dados no banco de dados
        await novoCliente.save()
        console.log("Cliente adicionado com sucesso")
    } catch (error) {
        console.log(error)
    }
}

//=========================================
const iniciarsistema = async () => {
    console.clear()
    console.log("Estudo do MongoDB")
    console.log("------------------------------------")
    await conectar()
    // CRUD create (insersão no banco de dados)
    await salvarCliente("Eder Silva", "99999-1234", "12345678900")
    await desconectar()
}

iniciarsistema()