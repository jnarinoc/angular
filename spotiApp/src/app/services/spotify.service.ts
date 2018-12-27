import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient ) {
    console.log('Servicio de Spotify Listo');
  }
  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAfY0dm-Qm5RKFmW3w0z5Vvs85N_SEhls36URBIpXD1_pVvMwdiJ8AzLSF5Mi8pQREZJvN5sFL90hr3x_o'
    });
    return this.http.get(url, { headers });
  }
  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data => {
      return data['albums'].items;
    }));
  }
  getArtistas( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe( map( data => {
      return data['artists'].items;
    }));
  }
  getArtista ( id: string ) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks ( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe( map( topTracks => {
        return topTracks['tracks'];
      }));
  }
}
