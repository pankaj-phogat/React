import React, {Component} from 'react';
import {Media} from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle,CardHeader, CardImgOverlay
} from 'reactstrap';
import DishDetail from './DishdetailComponent.js';

class Menu extends Component{
	constructor(props){
		super(props);
		this.state={
			selectedDish:null
		}
	}
	onDishSelect(dish){
		this.setState({selectedDish:dish})
	}
	render(){
		const menu=this.props.dishes.map((dish)=>{
			return(
				<div key={dish.id} className="col-12 col-md-5 m-1">
				<Card onClick={()=>this.onDishSelect(dish)}>
        			<CardImg top width="100%" src={dish.image} alt={dish.name} />
        			<CardImgOverlay>
        				<CardTitle><h5>{dish.name}</h5></CardTitle>
        			</CardImgOverlay>
      			</Card>
    			</div>
			);
		});
     
		return(
			<div className="container">
				<div className="row">
					{menu}
				</div>
				<DishDetail selectedDish={this.state.selectedDish} />
			</div>
		);
	}
}
export default Menu;