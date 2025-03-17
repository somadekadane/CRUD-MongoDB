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
    await salvarCliente("Marco Silva", "99999-1299", "12345678911")
    await salvarCliente("Maria Silva", "99999-1288", "12345678933")
    await salvarCliente("Eder Silva", "99999-1277", "12345678955")
    await salvarCliente("Marcia Silva", "99999-1266", "12345678977")
    await salvarCliente("Gildo Silva", "99999-1255", "12345678999")
    await desconectar()
}

iniciarsistema()