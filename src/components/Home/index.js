import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from '../../globalStyles';
import Hero from './../Hero';
import Products from './../Products';
import {productData, productDataTwo} from './../Products/data';
import Feature from './../Feature';
import Footer from './../Footer';
import Beverages from "./../Beverage/Beverages";



import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Home() {
  return ( 
    <>
 {/* < BrowserRouter>
 <Switch>
   <Route exact path="/edu" component={Edu}/>
   <Route exact path="/" component={Home}/>
  </Switch>
 </BrowserRouter>  */}

    
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favourite' data={productData} />
       {/* <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} /> 
     <Beverages />   */}

<Footer />
     
    </>
  );
} 

export default Home;