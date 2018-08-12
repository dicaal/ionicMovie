import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoviesProvidersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvidersProvider {

  apikey: string = 'api_key=40debfced8500981c913ebed5ad8ed68';
  base_url: string = 'https://api.themoviedb.org/3/search/movie?';
  query: string = '&query='; 
  movie_id: string = "'";
  popular_data: string ="popular?"

  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvidersProvider Provider');
  }

  movieSearch: any;
  currentSearch: any;

  getMovieData (title) {
    
    let urlRequest = this.base_url + this.apikey + this.query + title;
    return this.http.get(urlRequest)
    .subscribe(data =>{
     this.currentSearch = data.results
     console.log("currentSearch", this.currentSearch)
    })
}
}