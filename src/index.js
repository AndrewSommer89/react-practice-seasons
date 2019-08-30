import React from 'react';
import ReactDOM from 'react-dom';
import Seasons from './Seasons';


class App extends React.Component {
    state = {
        lat: null,
        errorMessage: ''
    };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
        //If we are able to get users location
            position =>{
            //Update the state of "lat"
                this.setState( { lat: position.coords.latitude } )
            },
        //If we are unable to get users location
            (err) => { 
                this.setState({ errorMessage: err.message});
             }
        );
    }

    render() {
        //Error when unablle to find "lat"
        if(this.state.errorMessage && !this.state.lat){
            return <div> Error: {this.state.errorMessage} </div>
        }
        //Lat is found
        if(!this.state.errorMessage && this.state.lat){
            return <Seasons lat={this.state.lat} />
        }
        return <div>Loading...</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)