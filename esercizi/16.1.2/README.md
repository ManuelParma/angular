# Esercizio 16.1.2

## Parte 1
La società Canzoni Brutte vuole mettere on-line una pagina web che permetta agli utenti di registrare su un sito le proprie canzone preferite.
Sull’applicazione sono già precaricati alcuni dischi, ma è possibile inserire le canzoni preferite in relazione a questi album.
### Domande
1. Studia il funzionamento dell’applicazione<br>
    Rispondi alle seguenti domande
      1. Nel codice trovi 3 strutture Dati (file model.ts) quali sono e a cosa servono?
      2. Sapresti spiegare come vengono usate le notazioni `[value]` e `[(ngModel)]` nel codice che genera la combo box?
      3. Qual è la riga di codice che trova l’oggetto Album a partire dal titolo?
      4. Come si aggiunge una canzone al vettore di canzoni?
2. Modifica il codice sorgente in modo che l’applicazione all’avvio scarichi la lista delle canzoni con una chiamata http e le mostri in un componente song-list (verde in Figura).
    1. Nota che l’oggetto songList è già dichiarato nel file app.component.ts
    2. La richiesta http va fatta a questo indirizzo: `https://my-json-server.typicode.com/malizia-g/hotel/songlist`
3. Aggiungi alla lista degli album qualche album a piacere
4. A fianco di ogni canzone visualizza un tasto “preferito”
    1. Applica Bootstrap
    2. Ogni volta che l’utente preme il tasto “preferito” colora di rosso la canzone selezionata (o viceversa) usando l’host binding
5. Ogni volta che l’utente seleziona un album nella Form di inserimento, i dettagli vengono aggiunti al componente dettagli-album  (arancione in Figura)

### Risposte
1.  1.  1. `album.model.ts` crea il modello di un oggetto per un album
        2. `song.model.ts` crea il modello di un oggetto per una canzone e contiene anche il modello dell'album
        3. `albumList.model.ts` e' una lista di album
    2. `[(ngModel)]` indica la variabile in cui viene salvato il valore dell'opzione selezionata mentre invece `[value]` serve per indicare di non usare direttamente una variabile ma un valore che la riguarda
2. ...