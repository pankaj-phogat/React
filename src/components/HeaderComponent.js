import React, {Component} from 'react';
import {Navbar , NavbarBrand, Jumbotron, Nav, NavbarToggler, NavItem, Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({isNavOpen: !this.state.isNavOpen});
    }
	render(){

		return(
			//this is a react fragmet used to group a bunch of elements and return it
			<React.Fragment>
				<Navbar dark expand='md'>
          			<div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
            			<NavbarBrand  href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar className="mr-auto">
                                <NavItem >
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"> Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"> About</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"> Menu</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"> Contact Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
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