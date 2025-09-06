/** @type {import("prettier").Config} */
module.exports = {
  semi: true, // punto e virgola obbligatori
  singleQuote: true, // usa apici singoli
  printWidth: 100, // lunghezza massima di riga
  tabWidth: 2, // Angular CLI usa 2 spazi
  trailingComma: 'es5', // virgola finale dove valido in ES5
  plugins: ['prettier-plugin-tailwindcss'],
};
