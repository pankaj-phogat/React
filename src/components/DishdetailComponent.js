import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb,  BreadcrumbItem } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Label, Row } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required= (val) => val && val.length;
const validRating=(val) => !(val) || (Number(val)>=1 && Number(val)<=5); 
const minLength= (len) => (val) => !(val) || (val.length>=len);
const maxLength=(len) => (val) => !(val) || (val.length<=len) ;
class CommentForm extends Component{
	constructor(props){
		super(props);
		this.state={
			isModalOpen:false,
		};
		this.toggleModal=this.toggleModal.bind(this);
	}
	toggleModal(){
		this.setState({
			isModalOpen:!this.state.isModalOpen,
		});
	}
	handleSubmit(values){
		this.toggleModal();
		this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
	}

	render(){
		return(
			<div>
				<Button outline onClick={this.toggleModal} >
					<span className="fa fa-pencil"> Submit Comment</span>
				</Button>

				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
					<div className="container">
						<ModalHeader toggle={this.toggleModal}>
							Submit Comment
						</ModalHeader>
						<ModalBody>
							<LocalForm onSubmit={(values)=> this.handleSubmit(values)} >
								<Row className="form-group">
									<Label for="rating">Rating</Label>
									<Control.text model=".rating" name="rating" id="rating"  
										className="form-control"
										validators={{required, validRating}} />
										<Errors model=".rating" className='text-danger' show="touched" messages={
											{required: 'required', validRating:'must be between 1 & 5'}
											} />
								</Row>
								<Row className="form-group">
									<Label for="author">Your Name</Label>
									<Control.text model=".author" name="author" id="author"  
										className="form-control"
										validators={{required, minLength: minLength(3),maxLength: maxLength(15)}} />
									<Errors model=".author" className='text-danger' show="touched" messages={
											{required: 'required', 
											minLength:'must be atleast 3 characters',
											maxLength:'must be less than 15 characters'}
										} />
								</Row>
								<Row className="form-group">
									<Label for="comment">Comment</Label>
									<Control.textarea model=".comment" name="comment" id="comment"  
										className="form-control" rows="6"
										 />
									

								</Row>
								<Row className="form-group">
									<Button type="submit" color="primary"   >Submit</Button>
								</Row>
							</LocalForm>
						</ModalBody>
					</div>
				</Modal>

			</div>
			
		);
	}
}

	function RenderDish({dish}){
		if(dish!=null){
			return(
				<div className="col-md-5 m-1">
					<FadeTransform in 
						transformProps={{
							exitTransform: 'scale(0.5) translateY(-50%)'
						}}>
						<Card>
							<CardImg top width="100%" src={baseUrl+dish.image} alt={dish.name} />
							<CardBody>
								<CardTitle>{dish.name}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
						</Card>
					</FadeTransform>
				</div>
			);
		}
		else{
			return(
				<div></div>
			);
		}
	}
	function RenderComments({comments, postComment, dishId}){
		if(comments!=null){
			return(
			
				<div className="col-md-5 m-1">
					<h4 className="text-left">Comments</h4>
					<ul className="list-unstyled text-left">
						<Stagger in>
							{
								comments.map((review)=>{
									var date=new Date(review.date);
	   								date=date.toDateString();
									return(
										<Fade in>
											<li key={review.id}>
												<p>{review.comment}</p>
												<p>--<em>{review.author}</em> &nbsp; {date}  </p>
											</li>
										</Fade>
									);
								})
							}
						</Stagger>
					</ul>
					<CommentForm dishId={dishId} postComment={postComment} />
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
		if(props.isLoading){
			return (
				<div className="container">
					<div className="row">
						<Loading />
					</div>
				</div>
			);
		}
		else if(props.errmsg){
			return (
				<div className="container">
					<div className="row">
						<h4>{props.errmsg} </h4>
					</div>
				</div>
			);
		}
		if(props.dish!=null){
			return(
				<div className="container">	
					<div className="row">
						<Breadcrumb>
								<BreadcrumbItem>
									<Link to="/menu">Menu</Link>
								</BreadcrumbItem>
								<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
							</Breadcrumb>	
						<div className="col-12">
								<h3>{props.dish.name}</h3>
								<hr />
							</div>	
					</div>
					<div className="row">
						<RenderDish dish={props.dish} />
						<RenderComments comments={props.comments} postComment={props.postComment}
							dishId={props.dish.id} />
					</div>
				</div>
			);
		}
	}


export default DishDetail;