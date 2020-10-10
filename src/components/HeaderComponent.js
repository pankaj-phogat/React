import React, {Component} from 'react';
import {Navbar , NavbarBrand, Jumbotron, Nav, NavbarToggler, NavItem, Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen:false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal= this.toggleModal.bind(this);
        this.handleLogin= this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({isNavOpen: !this.state.isNavOpen});
    }
    toggleModal(){
        this.setState({isModalOpen : !this.state.isModalOpen});
    }
    handleLogin(event){
        this.toggleModal();
        alert("username :"+this.username.value + "password :"+this.password.value+
            "remember me :"+this.remember.checked);
        event.preventDefault();
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
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in"> Login</span>
                                    </Button>
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
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal} >Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin} >
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" name="username" id="username" placeholder="username" 
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary" >Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
			</React.Fragment>
		);
	}
}

export default Header;