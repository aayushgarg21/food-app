import React from "react"
import Appbar from "./../components/Appbar"

export class Categories extends React.Component{
    constructor(props)
    {
        super(props)
       this.state = { category :[1,2,3]}
        this.getCategoriesFromCollection();

    } 
        categories = {};
        keys =[];
    getCategoriesFromCollection()
    {
      console.log("categories called");
      fetch('http://localhost:3000/categories', {})
        .then( (response) => {
          return response.json();
        })
        .then( (collection) => {
            this.categories = collection;
          this.keys= [...Object.keys(this.categories)];
        //   console.log(this.keys)
           this.setState({category:this.keys}) 
             
          })
    };
    
    render()
    {
        return(
            <div>
                <Appbar/>

                {
                    this.state.category.map(function(ele){
                    return (<h4>{ele}</h4>     
                      ); 
                    })
                }
                 
                 
                
                 
            </div>
        );
    }
}
