# Mail 
- Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere.
- stampa un messaggio appropriato sull’esito del controllo.

# Gioco dei dadi
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
- Stabilire il vincitore, in base a chi fa il punteggio più alto.

# Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

# Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

# Description Mail
- Utilizzando un prompt, chiedi all'utente una email e salvala in una variabile "MAIL"
- Controlla se in una "mail_list" è presente quella mail.
    SE si, stampa "l'utente ha eseguito l'accesso"
    SENNO' stampa " Accesso Negato"

# Description Gioco dei dadi

- var userNumber = Math.floor(Math.random()*6+1) per generare un random number per l'utente
- var pcNumber = Math.floor(Math.random()*6+1) per generare un random number per il computer
    - user.Number.toFixed() non mi serve poichè il numero deve essere intero SENZA decimali
- genero un IF dove eseguo il codice per valutare quale delle due variabili fra userNumber e pcNumber è maggiore.
if (userNumber > pcNumber){
    let winner= console.log('il Giocatore ha vinto ! con ${userNumber} contro {pcNumber}') // STAMPO IL RISULTATO
    document.writeln(winner)
}
else{
    let winner= console.log('il Computer ha vinto ! con ${pcNumber} contro {userNumber} ') // STAMPO IL RISULTATO
    document.writeln(winner)

}





