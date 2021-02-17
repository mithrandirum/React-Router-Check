import React from 'react'
import MovieList from './MovieList'
import Star from './Star'
import { Route, Link } from "react-router-dom"
import Discription from './Discription'

 const  Movie = ({title , discription, rate, imgUrl, id , trailer }) => {
  
   
    return (
        <div className = "movie">
             <img src={imgUrl} alt = {title}/>
          <div className = "movie-info">
            <p>{title}</p>  
           
         </div>   
      <div className = "movie-over">
     <h2>Overview</h2>
     <Link to = "/d">discription</Link>

     {
        <Route  path = "/d" render = { (props)=>  <Discription discription ={discription}
         history = {props.history} trailer = {trailer}  />}/>}
        <Star rate = {rate}/>
      </div>
     
       
        </div>
    )
}

export default Movie