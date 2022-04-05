/*
1. ask user name
2. ask user lastname
3. ask user favorite color
4. write in the page "name lastname favcolor 22"
*/

const firstName = prompt("Inserisci il nome");
const lastName = prompt("Inserisci il cognome");
const favColor = prompt("Inserisci il tuo colore preferito");
const casualNumber = Math.ceil(Math.random() * 100);

const outputStr = `
Password Generator: ${firstName}${lastName}${favColor}${casualNumber}
`;

document.getElementById("output").innerHTML = outputStr;
