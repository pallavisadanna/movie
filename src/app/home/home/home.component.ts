import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allMovies:any;
  movies:any;
  searchValue:any;
  titleSort:boolean = false;
  popularitySort:boolean = false;

  constructor(private service:MovieService) { }

  ngOnInit(): void {
this.getMovies();
  }
searchData(event:string)
{
  console.log(event);
  if(event == '')
  {
    this.movies = this.allMovies;
  }
  else{
    this.movies = this.allMovies.filter((a:any)=>a.title.toLowerCase().includes(event.toLowerCase()))
console.log(this.movies)
if(this.movies.length == 0)
{
  alert('Not found');
  this.movies = this.allMovies;
  this.searchValue = '';
}
  }
}
getMovies()
{
  this.service.getMoviesfromAsset().subscribe(res=>{
this.allMovies = res;
this.movies = res;
});
}
sortByTitle()
{
  this.titleSort = true;
  this.popularitySort = false;
this.movies.sort((a:any,b:any)=>a.title<b.title?-1:1)
}
sortByPopularity()
{
  this.titleSort = false;
  this.popularitySort = true
  this.movies.sort((a:any,b:any)=>a.popularity<b.popularity?1:-1)
}
}
