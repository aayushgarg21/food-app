import React from "react";
import Appbar from "./../components/Appbar"

export class Restaurant_detail extends React.Component{
    constructor(props)
    {
        super(props);
        this.state= { details:{}}
        this.callApp();
    }
 
    callApp()
    {
    fetch('https://developers.zomato.com/api/v2.1/restaurant?res_id='+ this.props.match.params.id, {
        headers: {
          "user-key": "9115190ac542cd032b874a38a5625591"
        }
      })
        .then( (response) => {
          return response.json();
        })
        .then( (details) => {
     this.setState({details});
  
        })
    } 
    render()
    {
        
       return(
           
           <div>
               <img src = {this.state.details.thumb} alt="image" ></img>
               <h1>{this.state.details.name}</h1>
               <a className="btn btn-primary" href= {this.state.details.url} target="_blank">Visit Site</a>
           </div>        


       );
    }
}
