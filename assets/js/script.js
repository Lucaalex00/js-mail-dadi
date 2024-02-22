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
/* 
let mail_list = [];
let true_mail = prompt('Inserisci una email (try with ciao@123.it');
let false_mail = 'ciao@123.it'
mail_list.push(true_mail);
if (true_mail == mail_list && false_mail != mail_list) {
    console.log('User has Joined')
    mail_list.push(false_mail)
    console.log(mail_list)
} else {
    console.log('Access denied')
}
 */



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