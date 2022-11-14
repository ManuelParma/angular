# Esercizio 15.2

## Domande
1. A cosa serve la classe Foo?
2. Quale vantaggio pensi possa esserci nel creare un modello di dati prima di riceverli?
3. Come si dichiara un Observable che riceve un tipo di dati specifico?
4. Come faccio a dire quale tipo di dato sto per ricevere da una richiesta http?
5. Per quale ragione fooData può essere di un tipo particolare di dati e non un generico Object?
6. Spiega il ciclo *ngFor che visualizza gli articoli.
7. A cosa servono le arrow Function?

## Risposte
1. Serve per salvare sotto forma di oggetto la risposta alla richiesta
2. E' piu' comodo lavorare con i dati ottenuti
3.  Mettendo all'interno delle parentesi angolari il nome della classe seguita da delle parentesi quadre
    ```ts
    export class AppComponent implements OnInit {
      o!: Observable<ClassName[]>;
      // ...
    }
    ```
4.  Allo stesso modo in cui si fa per l'observable
    ```ts
    export class AppComponent implements OnInit {
      constructor(public http: HttpClient) {
        http.get<ClassName[]>(); 
        // ...
      }
    }
    ```
5. Perche' un object generico non ha le proprieta' che richiediamo
6. Il ciclo for passsa per ogni oggetto ricevuto durante la richiesta e ne prende le proprieta' per metterle nell'html
7. Le arrow function sono una forma piu' contratta delle funzioni e in piu' servono come callback dei vari metodi tra cui le richieste