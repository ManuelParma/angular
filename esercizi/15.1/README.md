# Esercizio 15.1

## Domande

PONDI ALLE DOMANDE
1. Cosa devi fare per usare il modulo HTTP?
2. Prendendo in considerazione il componente Foo descrivi a cosa servono i seguenti attributi
    1. data
    2. loading
    3. o
3. Come si usa l’oggetto HttpClient ? Descrivi
    1. Come si importa
    2. Come viene passato al componente tramite la dependency injection
4. Spiega la differenza tra queste due notazioni
    1.  ```ts
        constructor(public http: HttpClient) {}
        ```
    2.  ```ts
        // other instance variables here
        http: HttpClient;
        constructor(http: HttpClient) {
          this.http = http;
        }
        ```
5. Come si ottiene un oggetto observable che riceverà i dati da una get http?
6. Come si “sottoscrive” un metodo che gestisca i dati ricevuti dall’oggetto observable descritto nella domanda precedente?
7. Commenta ogni riga del metodo getData
    ```ts
    getData = (d : Object) =>
      {
        this.data = new Object(d);
        this.loading = false;
      }
    ```
8. Descrivi il funzionamento delle seguenti righe HTML
    ```html
    <button type="button" (click)="makeRequest()">Make Request</button>
    <div *ngIf="loading">loading...</div>
    <pre>{{data | json}}</pre>
    ```
9. Come si fa una post http? Cosa si riceve come risposta?

## Risposte
1. Inserire l'`HttpComponent` all'interno del `app.module.ts` e importare nel modulo l'`HttpClient`
2.  1. Contiene la risposta alla richiesta da parte del server
    2. Indica se la richiesta e' stata completata
    3. Si usa per salvare la richiesta
3.  1.  ```ts
        import { HttpClient } from '@angular/common/http';
        ```
    2.  ```ts
        constructor (public http: HttpClient) {}
        ```
4. L'unica differenza e' che la prima e' piu' compatta, in termini di funzionamento sono identiche
5. Importando il modulo Observable
    ```ts
    import { Observable } from 'rxjs';
    ```
6.  ```ts
    getData(d: Object): void {
      this.data = new Object(d);
      this.loading = false;
    }
    ```
7.  ```ts
    // Instanzia una funzione chiamata getData che ha un argomento `d` di tipo object
    getData = (d : Object) =>
    {
      // Salva il contenuto del parametro all'interno della proprieta' data della classe
      this.data = new Object(d);
      // Imposta loading a false per indicare che ha finito la richiesta
      this.loading = false;
    }
    ```
8.  ```html
    <!-- Crea un bottone che una volta cliccato esegue il metodo `makeRequest` -->
    <button type="button" (click)="makeRequest()">Make Request</button>
    <!-- Fa apparire una scritta loading fino a che la richiesta non e' completa -->
    <div *ngIf="loading">loading...</div>
    <!-- Una volta che la richiesta e' completa fa visualizzare la risposta -->
    <pre>{{data | json}}</pre>
    ```
9. Serve a fare richieste `post` al posto che `get` e riceve una riposta identica agli altri metodi 