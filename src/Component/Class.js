import React, { Component } from 'react'

 class Class extends Component {
     constructor() {
       super()
     
       this.state = {
          name:"hello"
       }
     }
     changeName(){
         this.setState({
             name:"world"
         })
     }
  render() {
    return (
        <div>
      <div>{this.state.name}</div>
      <button onClick={()=>this.changeName()}>Click Here</button>
      </div>
    )
  }
}

export default Class