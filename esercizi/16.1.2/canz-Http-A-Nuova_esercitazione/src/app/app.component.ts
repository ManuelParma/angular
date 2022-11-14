import { Component, Input } from '@angular/core';
import { AlbumList } from './albumList.model';
import { Album } from './album.model';
import { Song } from './song.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  selectedOption : string;
  title = "Benvenuti al canzoniere";
  albums = AlbumList;
  selectedAlbum: Album = AlbumList[0];
  songList: Song[];  //Questo vettore va passato al componente sonList

  constructor(public http: HttpClient) { }
  ngOnInit() {
    this.get();
  }

  get() {
    this.http.get<Song[]>("https://my-json-server.typicode.com/malizia-g/hotel/songlist").subscribe(d => this.songList = d);
  }

  /*Il metodo on CLick controlla cerca l'album selezionato in base al titolo e aggiunge la canzone
  Selezionata alla songList*/
  onClick(t: HTMLInputElement  ,d : HTMLInputElement, l :HTMLInputElement ) : boolean
  {
    this.selectedAlbum = AlbumList.find((album: Album) => album.title == this.selectedOption);
    this.songList.push(new Song(this.selectedAlbum, new Date(d.value), Number(l.value), t.value));
    //Dopo aver aggiunto la canzone azzero tutti i campi
    t.value ="";
    d.value ="";
    l.value="";
    this.selectedOption = undefined;
    return false;
  }

}

