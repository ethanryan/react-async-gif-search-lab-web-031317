import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


class GifListContainer extends React.Component {

 constructor(){
   super()
   this.state = {
     gifs: [],
   }
 }

 userInput(input){
   var url = "http://api.giphy.com/v1/gifs/search?q="
   //var input = "cats"
   var api = "&api_key=dc6zaTOxFJmzC&limit=3"
   var query = url + input + api
   console.log('our search result: ', query);
   return (query)
 }

 getGifs(input) {
   const url = this.userInput(input)
   fetch(url)
   .then( response => {
     return response.json()
   }).then( data => {
     console.log('this is our data: ', data)
     console.log('this in the response handler function: ', this)

     // call this.setState
     // update state given this new API response
     this.setState({
       gifs: data.data
     })

   })

 }

 render(){
   console.log("state: ", this.state)
   return(
     <div>
       <p>Hi there from GifListContainer!</p>
       <GifSearch getInput={ this.getGifs.bind(this) }/>
       <GifList gifs={ this.state.gifs }/>
     </div>
   )
 }
}

export default GifListContainer
