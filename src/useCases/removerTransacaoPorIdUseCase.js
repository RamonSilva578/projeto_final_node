const TransacaoRepositoryNoSQL = require("../repositories/transacaoRepositoryNoSQL");
async function execute(_id) {
  const repository = new TransacaoRepositoryNoSQL();
  try {
    console.log("RemoverTransacaoPorIdUseCase::execute::transacao", _id);
    await repository.removeById(_id);
    return {
      success: true,
    };
  } catch (error) {
    console.log("ERROR::RemoverTransacaoPorIdUseCase::execute::error", error);
    return {
      success: false,
      httpCode: 500,
      errorMessage:
        "Ocorreu um erro ao tentar excluir a transacao, tente novamente mais tarde.",
    };
  }
}

module.exports = { execute };
