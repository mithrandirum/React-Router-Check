
import './App.css'
import Movie from './component/Movie'
import MovieList from './component/MovieList'
import React, {useState, useEffect} from 'react'
import StarRatingComponent from 'react-star-rating-component';

function App() {
  
const [searchTerm, setSearchTerm] = useState('') 
const [MovieListtt , setMovieList] = useState(MovieList)
var [rating , setRating] = useState(1)


const onStarClick =(nextValue, prevValue, name,) => {
   
    setRating(rating= nextValue); 
    
  }

const addContact = ()=>  {
  
  var contacts = [];
  var contact = {};
  contact.title= prompt("Enter movie title: ") 
  contact.discription = prompt("Enter movie discription: ");
  contact.rate = prompt("rate : ")
  contact.imgUrl = prompt("Enter poster url img: ")
  contacts[contacts.length] = contact;
  var newshit = [...MovieListtt,contact]
 setMovieList(newshit)
  
} 


 const handleOnchange = (e)=> {
  setSearchTerm(e.target.value)
  }
  
   const handleClick = ()=> {   
    addContact() 
  }

  return (
  <>
<header> 
    <div>
        <h2>Search by Rating: {rating}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rating}
          onStarClick={onStarClick}
         
        />
      </div>
       

  <form onSubmit={(e)=>e.preventDefault}> 
    <input className ="search" 
      type = "text" placeholder="Search..."
      type = "search"
      value = {searchTerm}
      onChange = {handleOnchange}
      />
  </form>
  <div className = "add-movie">
    <button className = "btn" onClick = {handleClick}>Add Movie</button>
  </div>
 </header>
     
    
    <div className="App">
    
     { rating == 1 ?  MovieListtt.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .map( (movie) => ( 
       <Movie title = {movie.title} discription = {movie.discription} 
       rate = {movie.rate} imgUrl={movie.imgUrl} key = {movie.id}
        trailer = {movie.trailer}/>
      
       )): 
      MovieListtt.filter((movie) =>
       movie.rate == rating &&
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .map( (movie) => ( 
       <Movie title = {movie.title} discription = {movie.discription} 
       rate = {movie.rate} imgUrl={movie.imgUrl} key = {movie.id}
        trailer = {movie.trailer}/>
      
       ))}
     
    </div>
    </>
  );
}

export default App;
