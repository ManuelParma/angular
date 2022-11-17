import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Album } from './album.model';
import { AlbumList } from './albumList.model';
import { Song } from './song.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = "Benvenuti al canzoniere";
  selectedOption: string;
  albums = AlbumList;
  selectedAlbum: Album = AlbumList[0];
  songList: Song[];
  showList: boolean = true;
  filteredSong: Song[];

  constructor(public http: HttpClient) { }
  ngOnInit() {
    this.get();
  }

  get() {
    this.http.get<Song[]>("https://my-json-server.typicode.com/malizia-g/hotel/songlist").subscribe(d => this.songList = d);
  }

  onClick(t: HTMLInputElement, d: HTMLInputElement, l: HTMLInputElement): boolean {
    this.selectedAlbum = AlbumList.find((album: Album) => album.title == this.selectedOption);
    this.songList.push(new Song(this.selectedAlbum, new Date(d.value), Number(l.value), t.value));
    t.value = "";
    d.value = "";
    l.value = "";
    return false;
  }

  toggleList(): void {
    this.showList = !this.showList;
  }

  toggleFavorite(song: Song): void {
    song.colorClass = this.isFavorite(song) ? 'text-body' : 'text-danger';
  }

  isFavorite(song: Song): boolean {
    return song.colorClass == 'text-danger';
  }

  onChange(): void {
    this.filteredSong = this.songList.filter(sL => sL.album.title == this.selectedOption);
  }

}

