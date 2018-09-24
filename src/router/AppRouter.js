import React from "react";
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import {App} from "./../components/App";
import {Restaurant_detail} from "./../components/Reataurant_detail";
import{Categories} from "./../components/categories";

  export const AppRouter = () =>{
      return(  
  <BrowserRouter>
  <div>
      
   <Switch>   
        <Route path="/" component={App} exact/>
        <Route path = "/detail/:id" component = {Restaurant_detail}/>
        <Route path = "/category" component = {Categories}/>
   </Switch>    
</div>     
       </BrowserRouter>    
      );
 };
 
 