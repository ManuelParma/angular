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
> 1. Dato il seguente codice `<li *ngFor="let name of names">Hello {{ name }}</li>`?
>     1. Cos'è il tag `<li>`?
>     1. A cosa serve il simbolo *?
>     1. Cos'è un elemento DOM?
>     1. Cosa fa la stringa "let name of names"
>         1. Cos'è names
>         1. Cosa fa let name 
>     1. Cosa visualizza la sintassi {{name}}
> 1. Riscrivi il ciclo sopra supponendo di avere un vettore che si chiama cars e usando una variabile di ciclo che si chiama c

## Risposte 02.1 \#1
> 1. `<nome-variabile>: <tipo-variabile>[] = []`
> 2. Lo si puo' riempire in vari modi, ma i principali sono utilizzando `this.<array> = [...array]` all'interno del costruttore o aggiungendogli un elemento alla volta con il metodo `.push(element)`
> 3.  1. E' il tag che specifica un elemento di una lista
>     2. A far capire ad angular che cio' che e' scritto dopo e' una sua istruzione
>     3. Un qualsiasi elemento visualizzato in una pagina html
>     4. Esegue un ciclo for nella tag in cui e' scritta in cui:
>         1. **name** e' il nome della variabile che rappresenta il singolo elemento del loop
>         2. **names** e' il nome della variabile che rappresenta l'intero array
>     5. Il contenuto della variabile
> 4. ```html
>    <li *ngFor="let c of cars">{{ c }}</li>
>    ```


## Domande 02.1 \#2
> 1. Rispetto al componente figlio (user-item)
>     1. A cosa serve il decoratore @Input?
>     1. Come si importa?
>     1. Come si associa a una variabile?
> 1. Rispetto al componente padre (user-list)
>     1. Come si passa un valore a un componente figlio?
> 1. Riscrivi il seguente codice rispettando questi vincoli
>     1. Il componente figlio si chiama gionny.
>     1. La variabile di input del componente figlio si chiama pupa
>     1. Il vettore si chiama bravo
>     1. La variabile di ciclo si chiama bu
> ```html
>    <ul>
>      <li *ngFor="let name of names">
>        <app-user-item [name]="name">
>        </app-user-item>
>      </li>
>    </ul>
>  ```
## Risposte 02.1 \#2
> 1.  1. A permette al valore di una variabile di essere immesso
>     2. 
>     3. `@Input() <variabile>: <tipo> = null`
> 2.  1. Utilizzando `<componente-figlio [<variabile-figlio>]="<variabile-figlio>">`
> 3.  ```html
>     <ul>
>       <li *ngFor="let bu of bravo">
>         <gionny [pupa]="bu">
>         </gionny>
>       </li>
>     </ul>
>     ```