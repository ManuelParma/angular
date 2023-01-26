import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  url: string = 'https://api.spotify.com/v1/search';
  token: string = 'BQDcfVZswlW2kngG678vcnknOd5OQ8co-suwch_dvf34PeZEdbZtizYVx4xOzCXW0Hc7kJ3VKbKDu6uk3LXbtw8PqjtIbwwMCJRVmdSCRNvpiOhJoJ850rLHsryE89kQmbnrdHkcnOq66UUx5tsLEjWrEtbqHX3mlrsD1Pax_G7Juz1gOe4K0shj9iuqrwej';

  constructor(private http: HttpClient) { }

  searchTrack(query: string, limit: number = 0): Observable<any> {
    let url = `${this.url}?q=${encodeURIComponent(query)}&type=track`;
    if (limit > 0)
      url = `${url}&limit=${limit}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.http.get(url, { headers });
  }
}
