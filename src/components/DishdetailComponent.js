import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

	function RenderDish({dish}){
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
	function RenderComments({dish}){
		if(dish!=null){
			const comments=dish.comments;
			return(
			
				<div className="col-md-5 m-1">
					<h4 className="text-left">Comments</h4>
					<ul className="list-unstyled text-left">
						{
							comments.map((review)=>{
								return(
									<li key={review.id}>
										<p>{review.comment}</p>
										<p>--<em>{review.author}</em> &nbsp; 
										{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(review.date)))} </p>
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

	const DishDetail= (props) => {
		return(			
				<div className="row">
					<RenderDish dish={props.dish} />
					<RenderComments dish={props.dish} />
				</div>
		);
	}


export default DishDetail;