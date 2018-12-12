import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient ) {
    console.log('Servicio de Spotify Listo');
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDESYcYy_DDIb8-QR_fqbwOjOL9o8S6Wn0boIKjgGF70rT7BAjh3d5Gx8oQ0Y4pmBvngLs_X_CdxUqHDKo'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}
