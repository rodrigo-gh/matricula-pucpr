module.exports = async function (context, req) {
  context.log("Função acionada!");

  context.res = {
    status: 200,
    body: {
      mensagem: "Função de matrícula online funcionando 🎉"
    }
  };
};
