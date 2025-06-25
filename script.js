const form = document.getElementById("matriculaForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  mensagem.textContent = "Matrícula enviada com sucesso! ✅";
});
