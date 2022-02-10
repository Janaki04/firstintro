import React, { Component } from 'react'

 class Conditional extends Component {
     constructor() {
       super()
     
       this.state = {
          ISloggedIn:true
       }
     }
  render() {
    return (
        <div>
      <div>Conditional</div>
     { this.state.ISloggedIn?(<h1>welcome</h1>):(<h1>thank you</h1>)}
     
     </div>
    )

  }
}
export default Conditional