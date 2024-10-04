/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*
function crazySum (a,b){
    a = 10; b = 10;
    if(a === b){return (a + b) * 3}
    else {return a + b}}
    console.log(crazySum())
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*
function boundary(num) 
{if (num > 20 && num <= 100 || num === 400)
    {return (true);}
    else {return false}
};
console.log(boundary(401));
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*
let reverseStringa2 = stringa => stringa.split('').reverse().join('');
console.log(reverseStringa2('Epicode'));
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*
function upperFirst (str){
    str = ('questa è una stringa')
    return str.charAt(0).toUpperCase() + str.slice(1)};
    console.log(upperFirst())
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*
let n = [];
n.push(Math.floor(Math.random() * 11));
console.log(n)
*/ 

// NOTA : Non Sono Riuscito ad Integrare il Codice in una Funzione,ma ho Comunque Completato L'esercizio. //


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*
function area (l1,l2){
    l1 = 12; l2 = 10;
    let area = l1 * l2;
    return area ;
}
console.log(area())
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/*
function crazyDiff (){
    let num1 = 39;
    let num2 = 19;
    risultato = num1 - num2;
    if(risultato > num2){console.log(risultato * 3)}
    return risultato
}
console.log(crazyDiff())
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*
function codify (stringa){
    let addStringa = 'EDOC';
    return addStringa + stringa
} console.log(codify('-IPE'))
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*
function check3and7(num){
    num = 21;
    if(num % 3 == 0 || num % 7 == 0)
        {return true}
    else{return false};
}console.log(check3and7())
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/*
function cutString (stringa){
  
    return stringa = stringa.slice(1, -1)
    
}console.log(cutString('Epicode'))
*/