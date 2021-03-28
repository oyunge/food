import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import {productData, productDataTwo} from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Beverages from './components/Beverage/Beverages';
import Home from './components/Home';
// import Edu from './components/Edu';


import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return ( 
    <>
 < BrowserRouter>
 <Switch>
   <Route exact path="/Beverages" component={Beverages}/>
   <Route exact path="/" component={Home}/>

  </Switch>
 </BrowserRouter> 

    {/* 
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favourite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
     {/* <Beverages /> 

     */}
{/* <Footer /> */}

    </>
  );
} 

export default App;