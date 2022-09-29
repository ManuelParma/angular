# Esercizio 01.1 - 02.1

## Domande 01.1
> 1. Come si dichiara una proprietà di una classe (variabile visibile a tutta la classe) in Angular?
> 2. Come si dichiara un costruttore?
> 3. Cos’è un costruttore?
> 4. Secondo te, quando viene creata l’istanza di una classe Angular?
> 5. Come si aggiunge una proprietà (o variabile) al template HTML?

## Risposte 01.1
> 1. Si dichiara scrivendo `<varname>: <vartype>` all'interno dell' *export class*
> 2. Si dichiara con la sintassi: 
>     ```ts
>       constructor () {
>         // code
>       } 
>     ```
> 3. Un costruttore e' la funziona principale di ogni classe che viene richiamata ogni volta che essa viene instanziata
> 4. Ogni volta che all'interno dell'html viene utilizzata la tag specifica del componente
> 5. Utilizzando due parentesi graffe aperte, il nome della variabile e due parentesi graffe chiuse es. `{{<variabile>}}`

## Domande 02.1 \#1
> 1. Come si dichiara un vettore in una classe Angular?
> 1. Come lo puoi riempire?
> 1. Dato il seguente codice <li *ngFor="let name of names">Hello {{ name }}</li>?
> 1. Cos'è il tag <li>?
> 1. A cosa serve il simbolo * 
> 1. Cos'è un elemento DOM?
> 1. Cosa fa la stringa "let name of names"
> 1. Cos'è names
> 1. Cosa fa let name 
> 1. Cosa visualizza la sintassi {{name}}
> 1. Riscrivi il ciclo sopra supponendo di avere un vettore che si chiama cars e usando una variabile di ciclo che si chiama c

## Risposte 02.1 \#1
> 1. `<nome-variabile>: <tipo-variabile>[] = []`