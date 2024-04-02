const TransacaoRepositoryNoSQL = require("../repositories/transacaoRepositoryNoSQL");
async function execute(_id, dados) {
  const repository = new TransacaoRepositoryNoSQL();
  const transacaoAtual = await repository.findById(_id);

  
  try {
    console.log("AtualizarTransacaoPorIdUseCase::execute::transacao", _id, dados);
    await repository.updateById(_id, dados);
    return {
      success: true,
    };
  } catch (error) {
    console.log("ERROR::AtualizarTransacaoPorIdUseCase::execute::error", error);
    return {
      success: false,
      httpCode: 500,
      errorMessage:
        "Ocorreu um erro ao tentar fazer uma atualização na transacao, tente novamente mais tarde.",
    };
  }
}

module.exports = { execute };
