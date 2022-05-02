/*
1. ask user name
2. ask user lastname
3. ask user favorite color
4. write in the page "name lastname favcolor 22"
*/

// Simple version
const nome = "Pippo";
const cognome = "Franchi"
const colore = "Blu"
const anni = 38;

const password = `Simple Password Generator: ${nome}${cognome}${colore}${anni}${anni}`;

document.getElementById("psw").innerHTML = password;

// Random version with user input
const firstName = prompt("Inserisci il nome");
const lastName = prompt("Inserisci il cognome");
const favColor = prompt("Inserisci il tuo colore preferito");
const casualNumber = Math.ceil(Math.random() * 100);

const outputStr = `Random Password Generator: ${firstName}${lastName}${favColor}${casualNumber}`;

document.getElementById("output").innerHTML = outputStr;
