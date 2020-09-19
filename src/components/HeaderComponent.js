import React, {Component} from 'react';
import {Navbar , NavbarBrand, Jumbotron} from 'reactstrap';

class Header extends Component{


	render(){

		return(
			//this is a react fragmet used to group a bunch of elements and return it
			<React.Fragment>
				<Navbar dark>
          			<div className="container">
            			<NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
          			</div>
        		</Navbar>
        		<Jumbotron>
        			<div className="container">
        				<div className="row row-header">
        					<div className="col-12 col-sm-6 text-left">
        						<h1> Ristorante Con Fusion</h1>
        						<p> We take inspiration from the world's best cuisines, create a unique fusion experience. Our Lip
        							lipsmacking creations will tickle your culinary senses!
   								   </p>
        					</div>
        				</div>
        			</div>
        		</Jumbotron>
			</React.Fragment>
		);
	}
}

export default Header;