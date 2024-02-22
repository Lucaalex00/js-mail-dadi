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
let mail_list = [];
let true_mail = prompt('Inserisci una email (try with ciao@123.it');
let false_mail = 'ciao@123.it'
/* mail_list.push(false_mail) */
mail_list.push(true_mail);
if (true_mail == mail_list && false_mail != mail_list) {
    console.log('User has Joined')
    mail_list.push(false_mail)
    console.log(mail_list)
} else {
    console.log('Access denied')
}

