import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor(props) {
    super(props);
    // THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = {
      latitude: null,
      errorMessage: ""
    }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // We called setState!!
         this.setState({latitude: position.coords.latitude})
      },
      err => {
        this.setState({errorMessage: err.message})
        console.log(err)
      }
    )
  }
  componentDidMount() {
    console.log("my component was rendered")
  }
  componentDidUpdate() {
    console.log("my component was just updated")
  }
  render() {
      if (this.state.errorMessage && !this.state.latitude) {
        return <div> Error {this.state.errorMessage} </div> 
      }
      if (!this.state.errorMessage && this.state.latitude) {
        return <div> latitude: {this.state.latitude} </div>
      }
      return <div>Loading</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
