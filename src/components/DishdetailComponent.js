import React, {Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle,CardHeader, CardImgOverlay
} from 'reactstrap';

class DishDetail extends Component{
	constructor(props){
		super(props);
	}
	renderDish(dish){
		if(dish!=null){
			return(
				<div className="col-md-5 m-1">
				<Card>
					<CardImg top width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
				</div>
			);
		}
		else{
			return(
				<div></div>
			);
		}
	}
	renderComments(dish){
		if(dish!=null){
			const comments=dish.comments;
			return(
				<div className="col-md-5 m-1">
					<h4 className="text-left">Comments</h4>
					<ul className="list-unstyled text-left">
						{
							comments.map((review)=>{
								var date=new Date(review.date);
								date=date.toDateString();
								return(
									<li>
										<p>{review.comment}</p>
										<p>--<em>{review.author}</em> &nbsp; {date}</p>
									</li>
								);
							})
						}
					</ul>
				</div>
			);
		}
		else{
			return(
				<div></div>
			);
		}
	}

	render(){
		return(
			<div className="row">
			{this.renderDish(this.props.selectedDish)}
			{this.renderComments(this.props.selectedDish)}
			</div>
		);
	}
}

export default DishDetail;