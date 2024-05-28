const pug = require('pug');

// Compile the source code(usando el método compileFile) este metodo es propio de pug
const compiledFunction = pug.compileFile('./interface-adapters/emailService/template.pug');

// Renderizar un conjunto de datos
console.log(compiledFunction({
  name: 'Timothy'
}));
// "<p>Timothy's Pug source code!</p>"

// Renderizar otro conjunto de datos
console.log(compiledFunction({
  name: 'Forbes'
}));