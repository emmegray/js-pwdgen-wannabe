/*
1. ask user name
2. ask user lastname
3. ask user favorite color
4. write in the page "name lastname favcolor 22"
*/

const firstName = prompt("Inserisci il nome");
const lastName = prompt("Inserisci il cognome");
const favColor = prompt("Inserisci il tuo colore preferito");


const outputStr =
`
Mi chiamo ${firstName} ${lastName} il mio colore preferito è ${favColor}
`;

document.getElementById("output").innerHTML = outputStr;
