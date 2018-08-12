import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvidersProvider } from '../../providers/movies-providers/movies-providers';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: any;
  movie: any;
  image: any;
  id: any;
  movies;

  movieSearch: any;
  currentSearch: any[] = [];
  constructor(public navCtrl: NavController, private moviesProviders: MoviesProvidersProvider ) {

  }


  getMovie(ev: any){
    const val = ev.target.value;
    this.moviesProviders.getMovieData(val).subscribe(
      (data) =>{
      console.log(data);
      console.log(data.results[1].title);
      this.currentSearch = [];
      if(data.results.length > 10){
        for(let i = 0; i < 10; i++){
          this.currentSearch.push(data.results[i]);
        }
      }
     console.log("currentSearch", this.currentSearch);
    })
  }
  
}
