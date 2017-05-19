import React from 'react'

class GifSearch extends React.Component {

 constructor(){
   super()
   this.state = {
     input: ''
   }
 }

 eventHandler(event){
   this.setState({
     input: event.target.value,
   })
 }

 handleSubmit(event){
   event.preventDefault()
   this.props.getInput( this.state.input )
   this.setState({input: ''})
 }

 render(){
   return(
     <div>
       <p>Hello from GifSearch!</p>
       <form onSubmit={this.handleSubmit.bind(this)}>
         <label>
           Search Term:
           <input type="text" name="searchTerm" value={this.state.input} onChange={this.eventHandler.bind(this)}/>
         </label>
         <input type="submit" value="Submit" />
       </form>
     </div>
   )
 }
}

export default GifSearch
