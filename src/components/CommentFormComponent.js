import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Label, Row } from 'reactstrap';

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
		alert(JSON.stringify(values));
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
									<Label for="name">Your Name</Label>
									<Control.text model=".name" name="name" id="name"  
										className="form-control"
										validators={{required, minLength: minLength(3),maxLength: maxLength(15)}} />
									<Errors model=".name" className='text-danger' show="touched" messages={
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

export default CommentForm;