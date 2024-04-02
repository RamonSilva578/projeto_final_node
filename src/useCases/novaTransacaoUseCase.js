const TransacaoRepositoryNoSQL = require("../repositories/transacaoRepositoryNoSQL");

async function execute(transacao) {
  const repository = new TransacaoRepositoryNoSQL();
  try {
    const transacoes = await repository.findAll();
    transacao.data = new Date();
    
    const proximoId = () => {
      if (transacoes.length === 0) {
        return 1;
      }
      const maxId = Math.max(...transacoes.map((transacao) => transacao.id));
      return maxId + 1;
    };

    transacao.id = proximoId();
    console.log("NovaTransacaoUseCase::execute::transacao", transacao);

    await repository.create(transacao);
    
    return {
      success: true,
    };
  } catch (error) {
    console.log("ERROR::NovaTransacaoUseCase::execute::error", error);
    return {
      success: false,
      httpCode: 500,
      errorMessage:
        "Ocorreu um erro ao tentar criar a nova transacao, tente novamente mais tarde.",
    };
  }
}

module.exports = { execute };
