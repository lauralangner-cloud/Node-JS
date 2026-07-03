const validacoes = require('./2.3');

// Testando nomes
console.log(validacoes.validarNome("Ana"));     // válido
console.log(validacoes.validarNome("Lu"));      // inválido

// Testando idades
console.log(validacoes.validarIdade(18));       // válida
console.log(validacoes.validarIdade(0));        // inválida