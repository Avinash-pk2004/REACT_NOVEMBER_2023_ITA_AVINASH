import './webpage.css';
import Navbar from './navbar.js';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link} from 'react-router-dom';

const Webpage = () => {
    
  const gmail="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ASKXGp1PZyBbfICnHqnD8iNLf49nYcwItvOSwahoePVXqU117O8ys3FdF5vEP6gD3NIxO3Un6jGTjw&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S956782086%3A1700746651663821&theme=glif";
    return ( 
       
        
  <body >
    
      <div class="header">
        <div>
        <pre><h1 id="all">Ready to adopt?</h1></pre></div>
        <div> 
      <BottomNavigation id="near">
    
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </div>
        
        <Link to='/Reg'><Button id="sign">Sign up</Button> </Link> 
        <Link to='/Login'><Button id="log">Log in</Button></Link>      
    </div>

    <Navbar/>
    
    
<div id="delhi">
    <div class="main">
        <h3><pre>Find your new best friend.
Browse pets from our network of over 11,500 shelters and rescues.</pre></h3>
        
       
    </div>

    <div class="contain">
        
        
        <div class="car">
            <h2 id="as" >Dogs for Adoption in Delhi</h2>
            <button id="but1">Adopt Now</button></div>
    
        <div class="car">
            <h2 id="as">Dogs for Adoption in Mumbai</h2>
            <button id="but1">Adopt Now</button>
        </div>
        <div class="car">
            <h2 id="as">Dogs for Adoption in Tamilnadu</h2>
            <button id="but1">Adopt Now</button>
        </div>
        </div>
        </div>
    
    <h1>Newly Added Furry Friends</h1>
    <div class="dog">
    <div class="friend">
        <h1>Tuktuk</h1>
       <h2> <p><a href="https://www.petfinder.com/dogs-and-puppies/breeds/afghan-hound/">Afghan hound</a></p></h2>
    </div>
    <div class="friend">
        <h1>Maze</h1>
        <h2><p><a href="https://www.petfinder.com/dogs-and-puppies/breeds/german-shepherd/">German Shepherd Dog</a></p> </h2>
    </div>
    <div class="friend">
        <h1>Tyson</h1>
        <h2><p><a href="https://www.petfinder.com/dogs-and-puppies/breeds/bulldog/">Bulldog</a></p> </h2>
    </div>
    </div>
    <div class="dog1">
    <div class="friend">
        <h1>Fooly</h1>
        <h2><p><a href="https://www.petfinder.com/dogs-and-puppies/breeds/labrador-retriever/">Labrador Retriever</a></p> </h2>
    </div>
    <div class="friend">
        <h1>Scooby</h1>
        <h2><p><a href="https://www.petfinder.com/dogs-and-puppies/breeds/german-shepherd/">German Shepherd</a></p> </h2>
    </div>
    <div class="friend">
        <h1>Dahila</h1>
        <h2><p><a href="https://www.petfinder.com/dogs-and-puppies/breeds/pit-bull/">Pitbull</a></p> </h2>
    </div>
    </div>
    

    <div class="footer">
    <p>Pets Available for Adoption Nearby</p>
<p>Write to us at:<a href={gmail}>ready2adopt@gmail.com</a></p>
        <a href="#">DOGS</a>
        <a href="#">CATS</a>
        <a href="#">OTHER TYPES OF PETS</a>
       
    </div>
</body>


       
        
     );
}
 
export default Webpage;