function validarNome(nome) {
    if (nome.length >= 3) {
      return "Nome válido";
    } else {
      return "Nome inválido (mínimo 3 letras)";
    }
}

function validarNome(nome) {
    if (nome.length >= 3) {
      return "Nome válido";
    } else {
      return "Nome inválido (mínimo 3 letras)";
    }
  }
  
  function validarIdade(idade) {
    if (idade > 0) {
      return "Idade válida";
    } else {
      return "Idade inválida (deve ser maior que 0)";
    }
  }
  
  module.exports = {
    validarNome,
    validarIdade
  };