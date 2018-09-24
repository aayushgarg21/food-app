import React from "react";
import {Search} from "./search"
import {Restaurants} from "./Restaurants"
import Appbar from "./../components/Appbar"
export class App extends React.Component
{    
    constructor(props)
    {
        super(props)
        this.state = {restaurant:[],collection:{}}
        this.addRestaurantToCollection = this.addRestaurantToCollection.bind(this);
        this.getCategoriesFromCollection=this.getCategoriesFromCollection.bind(this);
        
    }
    
         getCategoriesFromCollection()
         {
           console.log("categories called");
           fetch('http://localhost:3000/categories'

         , {
           })
             .then( (response) => {
               return response.json();
             })
             .then( (collection) => {
               console.log(collection);
               this.setState(()=>{
               collection 
             });   
      
           })
         }
         
        addRestaurantToCollection()
           {
           console.log("called addRestaurantToCollection() method");
          var c = document.getElementById("add").value;
          const newObj = {};
          newObj[c] = ["movie1", "movie2", "movie3"];
           let collection = Object.assign(newObj, this.state.collection);
          fetch(' http://localhost:3000/categories'
          , {
           method: 'PATCH',
           headers: {
             
        "user-key": "9115190ac542cd032b874a38a5625591",
             "Accept": "application/json",
             "Content-Type": "application/json"
           },
           
           body: JSON.stringify(collection)
     })
    
    .then( (response) => {
      return response.json();
    })
    .then( (collection) => {
          console.log(collection);
      this.setState(()=>{
          collection 
      });

    })
  } 

     

    
  getData() {
    
    let value= document.getElementById("test").value;
        console.log(value)

    fetch('https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city&q='+value, {
      headers: {
        "user-key": "9115190ac542cd032b874a38a5625591"
      }
    })
      .then( (response) => {
        return response.json();
      })
      .then( (myJson) => {

        this.setState({restaurant:myJson.restaurants});

      })    
    }
 

   render()
   {
      
       return(
           <div>
             {this.getCategoriesFromCollection()}
             <Appbar/>
           <Search  getData = {this.getData.bind(this)}/>
           <Restaurants 
            restaurants={this.state.restaurant}
            addRestaurantToCollection={this.addRestaurantToCollection.bind(this)}
            getCategoriesFromCollection={this.getCategoriesFromCollection.bind(this)}
            collection = {this.state.collection}
            />
           </div>
       );
   }



}
