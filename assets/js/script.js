/*
STUFF
let/const
if/else if
numbers
strings
array[]
prompt
getelementbyID/ querySelector
HTML ELEMENTS
*/
/* console.log('try') */



//MAIL EX

let mail_list = ['ciao@gmail.com', 'only@gmail.com', 'google@gmail.com'];
let user_mail = prompt('Inserisci una email')
let check = false;
for (let i = 0; i < mail_list.length; i++) { //crea un ciclo for con una variabile i che cresce ad ogni ciclo di 1
    let mailElement = mail_list[i]; //crea una variabile con valore di i che ad ogni ciclo cambia di valore
    console.log(mailElement); //crea un console log che stampi OGNI CICLO il valore che cambia della mail_list

    if (user_mail == mailElement) { // FAI UN CONTROLLO : se l'email inserita dall'utente è presente nella lista
        check = true; //cambia il valore di check in TRUE
    }
}
if (check == true) { //SE IL VALORE DI CHECK è **TRUE**
    console.log('User has Joined'); //STAMPA user has joined
} else { //SENNO'
    console.log('Access Denied'); //STAMPA access denied
}

//BONUS
let email_output = document.querySelector('.email_output')
let input = document.getElementById('input');
document.getElementById('btn_submit').addEventListener('click', function () {
    email_output.innerHTML = `la tua email è ${input.value}`
    console.log(input.value)
})




//DICE EX

let userNumber = Math.floor(Math.random() * 6 + 1);
console.log(userNumber) //DEBUG
let pcNumber = Math.floor(Math.random() * 6 + 1);
console.log(pcNumber) //DEBUG

if (userNumber > pcNumber) {
    console.log('Il Giocatore ha vinto!');
    document.writeln(`il Giocatore ha vinto contro il Computer (${userNumber} - ${pcNumber})`)
} else if (pcNumber > userNumber) {
    console.log('Il Computer ha vinto!');
    document.writeln(`il Computer ha vinto contro il Giocatore (${pcNumber} - ${userNumber})`);
} else {
    console.log("PARITA'");
    document.writeln(`C'è stata una parità (${pcNumber} - ${userNumber})`);
}






let container = document.querySelector('.contenitore') // container è un Node

let paragraph = 'ciao' // aragraph è una stringa


// .append() . appendChild() sono metodi dei Node

let par = document.createElement('p') // Node
par.innerText = "ciaone";
par.className = "text-blue";

container.append(par);


// come posso usare una stringa? 
container.innerHTML += "miniciao";
container.innerHTML += "<h1>megaciao</h1>";

console.log(container)