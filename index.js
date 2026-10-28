// ex 3 
import { PI, somar } from './matematica.js';

// ex 4
import saudarUsuario from './saudacao.js';

// ex 5
import { formatar as enfeitarTexto } from './utilitarios.js';

console.log('--- TESTE DOS MÓDULOS ES6 ---');

// Teste ex 3
console.log(`Valor de PI: ${PI}`);
console.log(`Resultado da Soma (15 + 30): ${somar(15, 30)}`);

// Teste ex 4
console.log(saudarUsuario('Seu Nome'));

// Teste ex 5
console.log(enfeitarTexto('Node.js Módulos'));