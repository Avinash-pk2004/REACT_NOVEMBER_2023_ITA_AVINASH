import './navbar.css';
const Navbar = () => {
    return ( 
     <div className="menubar">
      <ul>
        <li><a href="#"><i class="fa fa-home"></i>ADOPT OR GET INVOLVE</a>
        <div class="submenu1">
          <ul>
            <li><a href="#">About Petfinder</a></li>
            <li><a href="#">Adopting Pets</a></li>
            <li><a href="#">Animal Shelters & Rescues</a></li>
          </ul>
        </div>
        </li>
        <li><a href="#"><i class="fa fa-users"></i>DOGS & PUPPIES</a>
        <div class="submenu1">
          <ul>
            <li><a href="#">Dog Adoption</a></li>
            <li><a href="#">Dog Breeds</a></li>
            <li><a href="#">Feeding Your Dog</a></li>
            <li><a href="#">Dog Behavior</a></li>
            <li><a href="#">Dog Health & Wellness</a></li>
            <li><a href="#">Dog Training</a></li>
            <li><a href="#">Other Dog Information</a></li>
          </ul>
        </div>
        </li>
        <li><a href="#"><i class="fa fa-user"></i>CATS & KITTENS</a>
        <div class="submenu1">
          <ul>
            <li><a href="#">Cat Adoption</a></li>
            <li>          <a href="#">Cat Breeds</a></li>
            <li>          <a href="#">Feeding Your Cat</a></li>
            <li>          <a href="#">Cat Behavior</a></li>
            <li>          <a href="#">Cat Health & Wellness</a></li>
            <li>          <a href="#">Cat Training</a></li>
            <li>          <a href="#">Other Cat Information</a></li>
          </ul>
        </div>
        </li>
        <li><a href="#"><i class="fa fa-clone"></i>OTHER TYPES OF PETS</a>
        <div class="submenu1">
          <ul>
            <li> <a href="#">Birds</a></li>
            <li>          <a href="#">Exotic Pets</a></li>
            <li>          <a href="#">Guinea Pigs</a></li>
            <li>          <a href="#">Horses</a></li>
            <li>          <a href="#">Rabbits</a></li>
            <li>          <a href="#">Reptiles</a></li>
            <li>          <a href="#">Small & Furry Pets</a></li>
          </ul>
        </div>
        </li>
        <li><a href="#"><i class="fa fa-angellist"></i>HOME SERVICES</a>
        <div class="submenu1">
          <ul>
            <li> <a href="#">Veterinay Treatment</a></li>
            <li>          <a href="#">Regular Health Checkup</a></li>
            <li>          <a href="#">Dermal Care</a></li>
            
          </ul>
        </div>
        </li>
        <li><a href="#"><i class="fa fa-inr"></i>SETTINGS</a>
        <div class="submenu1">
          <ul>
            <li><a href="#">Account</a></li>
            <li>          <a href="#">My Adopt</a></li>
            <li>          <a href="#">Order</a></li>
            
          </ul>
        </div>
        </li>
        <li><a href="#"><i class="fa fa-phone"></i>PROFILE</a>
        <div class="submenu1">
          <ul>
            <li>  <a href="#">Avatar</a></li>
            <li>          <a href="#">Edit</a></li>
            <li>          <a href="#">About</a></li>
         
          </ul>
        </div>
        </li>
      </ul>
     </div>


    );
}
 
export default Navbar;



