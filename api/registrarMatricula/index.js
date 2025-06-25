module.exports = async function (context, req) {
    context.log('Requisição recebida em registrarMatricula.');

    context.res = {
        status: 200,
        body: { mensagem: "Matrícula registrada com sucesso!" }
    };
};
