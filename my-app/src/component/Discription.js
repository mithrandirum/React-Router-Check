import React from 'react'


function Discription({discription, history, trailer}) {
    console.log(trailer)
    return (
        <div>
           {discription} 
           <a href = {trailer}>trailer</a>
           <button onClick = {() => { history.push("./")}}>Back</button>

        </div>
    )
}

export default Discription
