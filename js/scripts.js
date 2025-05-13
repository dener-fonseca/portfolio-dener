// Criação de comando em JavaScript para fazer um botão enviar o usuário para o link da página no GitHub

function abrirLink(numero) {
  const links = {
    1: "https://github.com/dener-fonseca/trabalho-uninter-cofrinho.git",
    2: "https://github.com/dener-fonseca/dio-trilha-java-basico1.git",
    3: "https://github.com/dener-fonseca/dio-trilha-java-basico4.git"
  };

  if (links[numero]) {
    window.open(links[numero], "_blank");
  }
}