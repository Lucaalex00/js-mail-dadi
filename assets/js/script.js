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
mail_list.push(user_mail);

for (let i = 0; i < mail_list.length; i++) {
    let mailElement = mail_list[i];
    console.log(mailElement);

    if (user_mail != mailElement) {
        console.log('User has Joined');

    } else {
        console.log('Access denied')
    }

}

/* if (user_mail != mail_list && verified_mail == mail_list) {
    console.log('User has Joined')
    mail_list.push(verified_mail)
    console.log(mail_list)
} else {
    console.log('Access denied')
} */

// prima del ciclo creo una variabile check=false





//BONUS
let email_output = document.querySelector('.email_output')
let card_c = document.getElementById('card_content')
let input = document.getElementById('input').value
document.getElementById('btn_submit').addEventListener('click', function () {
    email_output.innerHTML = `la tua email è ${input}`
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

