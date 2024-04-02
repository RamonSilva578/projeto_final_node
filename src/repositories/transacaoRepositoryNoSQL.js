const {
  startConnection,
  stopConnection,
} = require("../infra/database/mongodb");
const TransacaoModel = require("../infra/models/transacao");

class TransacaoRepositoryNoSQL {
  async findAll() {
    try {
      await startConnection();
      const transacoes = await TransacaoModel.find();
      await stopConnection();
      return transacoes;
    } catch (error) {
      console.log("ERROR::TransacaoRepositoryNoSQL::findAll::error", error);
      throw new Error("Erro ao tentar consultar as transacoes");
    }
  }

  async create(transacao) {
    try {
      await startConnection();
      await TransacaoModel.create(transacao);
      await stopConnection();
    } catch (error) {
      console.log("ERROR::TransacaoRepositoryNoSQL::create::error", error);
      throw new Error("Erro ao tentar criar a transacao");
    }
  }

  async removeById(_id) {
    try {
      await startConnection();
      await TransacaoModel.deleteOne({ _id });
      await stopConnection();
    } catch (error) {
      console.log("ERROR::TransacaoRepositoryNoSQL::removeById::error", error);
      throw new Error("Erro ao tentar remover a transacao");
    }
  }

  async updateById(_id, dados) {
    try {
      await startConnection();
      await TransacaoModel.updateOne({ _id }, dados);
      await stopConnection();
    } catch (error) {
      console.log("ERROR::TransacaoRepositoryNoSQL::updateById::error", error);
      throw new Error("Erro ao tentar fazer uma atualização na transacao");
    }
  }

  async findById(_id) {
    try {
      await startConnection();
      const transacao = await TransacaoModel.findById(_id);
      await stopConnection();
      return transacao;
    } catch (error) {
      console.log("ERROR::TransacaoRepositoryNoSQL::findById::error", error);
      throw new Error("Erro ao tentar encontrar a transacao por ID");
    }
  }
}

module.exports = TransacaoRepositoryNoSQL;
