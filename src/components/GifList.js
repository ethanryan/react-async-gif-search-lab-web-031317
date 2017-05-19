import React from 'react'
import GiftListContainer from '../containers/GifListContainer'
import GifSearch from './GifSearch'

class GifList extends React.Component {

 constructor(){
   super()
   this.state = {
     //gifs: []
   }
 }

 render(){
   const allTheGifs = this.props.gifs.map( gif =>
     <li>
       {/* <img src={gif.url}/> */}
       <img src={gif.images.original.url}/>
       {/* {gif.url} */}
       {/* {gif.images.original.url} */}

       {/* //gifs: data.images.original.url */}

     </li>)
   return(
     <div>
       <ul>
         { allTheGifs }
       </ul>
     </div>
   )
 }
}

export default GifList
