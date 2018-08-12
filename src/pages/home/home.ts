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

  constructor(public navCtrl: NavController, private moviesProviders: MoviesProvidersProvider ) {

  }


  getMovie(){
    
    this.moviesProviders.getMovieData(this.title);
  }
  
}
