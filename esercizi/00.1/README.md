# Esercizio 00.1

## Domande 01

> 1. Qual è il comando per installare la angular cli?
> 2. Cosa contiene la pagina index.html?
> 3. Cos’è l’app-root?
> 4. Come si avvia un progetto angular?
## Risposte 01

> 1. Il comando per installare l'Angular CLI e' `npm i -g @angular/cli`
> 2. La pagina index.html contiene il template default del sito ed e' il file in cui verranno aggiunti i componenti principali
> 3. L'app-root e' il selettore predefinito dato al componente "app" da Angular e viene usato in un file html per importare il componente
> 4. Per avviare un server locale in fase di test e visualizzare il sito si utilizza il comando `ng serve`

## Domande 02

> 1. Come si crea un nuovo componente?
> 2. A cosa serve il codice import?
> 3. A cosa serve i decoratore @Component?
>     1. A cosa serve specificare il templateUrl?
>     2. Lo styleUrl?
>     3. Il selector?
> 4. Come si aggiunge un nuovo componente all’app component?
> 5. Scrivi sul quaderno uno schema che contenga il codice di un componente  e di tutti i file a cui fa riferimento
> 6. A cosa serve il simbolo {{ }} nel template html?
> 7. Da cosa è composta un’applicazione Angular?
> 8. Descrivi le funzionalità riassunte nella seguente immagine (descrivi ogni rettangolo)
> 9. Qual è la convenzione per la nomenclatura dei seguenti file che costituiscono un componente.
>     - nome del componente
>     - nome del template html
>     - nome del template css

## Risposte 02

> 1. Si crea utilizzando il comando `ng generate component <name>` o abbreviato `ng g c <name>`
> 2. E' necessario per importare i moduli di nodejs richiesti al sito per funzionare
> 3. Viene utilizzato per definire i metadati del componente in cui e' scritto
>     1. Specificando il *templateUrl* si dice ad angular di utilizzare quello specifico file html come template
>     2. Lo *styleUrl* si utilizza per specificare il file css che si vuole usare come stile del componente
>    3. Il *selector* rappresenta la tag utilizzata nell'html per fare riferimento al componente
> 4. Inserendo nell'html una tag contentenente il *selector* del componente
> 5.  ```ts
>     @Component({
>       selector: 'app-root',
>       templateUrl: './app.component.html',
>       styleUrls: ['./app.component.css']
>     }) 
>     ```
> 6. Viene utilizzato per utilizzare variabili typescript all'interno del template html
> 7. Un'applicazione Angular e' composta da componenti totalmente indipendenti tra loro
> 8. 
> 9.  - `<name>.component.ts`
>     - `<name>.component.html`
>     - `<name>.component.css`