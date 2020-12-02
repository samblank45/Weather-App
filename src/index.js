import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends React.Component {
  constructor(props) {
    super(props);
    // THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = {
      latitude: null,
      errorMessage: ""
    }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({latitude: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    )
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> Error {this.state.errorMessage} </div> 
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay lat={this.state.latitude}  />
    }
    return <Spinner message="loading..."/>
  }

  render() {
    return (
      <div className="border-red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
