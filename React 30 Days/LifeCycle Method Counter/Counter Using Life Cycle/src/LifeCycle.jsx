
import React from "react";


class LifeCycle extends React.Component{
   constructor(props){
      super(props)
      console.log("Successfully Initialized")
      this.state = {Count : 0}
   }

   componentDidMount(){
      console.log("Component Did Mount")
   }
   componentDidUpdate(prevProps,prevState){
      console.log("Component Did Update")
   }
   componentWillUnmount(){
      console.log("Component Will Unmount")
   }

   increment = () => {
      this.setState({Count : this.state.Count + 1})
   }
   decrement = () => {
      if(this.state.Count >  0){
         this.setState({Count : this.state.Count -  1})
      }else{
         alert("Enough")
      }
    
   }




   render(){
      console.log("Rendered")
      return(
         <>

      <h1>Count : {this.state.Count}</h1>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>

         </>
      )
   }
}

export default LifeCycle;