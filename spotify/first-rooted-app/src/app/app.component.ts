import { Component } from '@angular/core';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data!: any;

  constructor(private spotify: SpotifyService) { }
  
  kdown(input: HTMLInputElement): void {
    const value = input?.value != undefined ? input.value : "";
    this.spotify.searchTrack(value).subscribe(r => {
      this.data = r;
    });
  }
}
