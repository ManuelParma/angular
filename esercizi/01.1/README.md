# Esercizio 01.1

## Domande
> 1. Come si dichiara una proprietà di una classe (variabile visibile a tutta la classe) in Angular?
> 2. Come si dichiara un costruttore?
> 3. Cos’è un costruttore?
> 4. Secondo te, quando viene creata l’istanza di una classe Angular?
> 5. Come si aggiunge una proprietà (o variabile) al template HTML?

## Risposte
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