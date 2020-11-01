import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';
//this one should only change comments part of state
export const addComment = (dishId, rating, author, comment) => ({
	type: ActionTypes.ADD_COMMENT,			//type of action
	payload : {
		dishId: dishId,
		rating: rating,
		author: author,
		comment: comment
	}								//payload is data that is transferred 
	//action returns a plane JS Object that contains a type and a payload(data);
});

//its a thunk --- it returns a function
export const fetchDishes =() => (dispatch) => {
	dispatch(dishesLoading(true));

	return fetch(baseUrl + 'dishes')
	    .then(response => response.json())
	    .then(dishes => dispatch(addDishes(dishes)));

} 

export const dishesLoading = ( ) => ({
	type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = ( errmess ) => ({
	type: ActionTypes.DISHES_FAILED,
	payload: errmess
});


export const addDishes = (dishes) => ({
	type: ActionTypes.ADD_DISHES,
	payload: dishes
});

export const fetchComments =() => (dispatch) => {

	return fetch(baseUrl + 'comments')
	    .then(response => response.json())
	    .then(comments => dispatch(addComments(comments)));

} 
export const commentsFailed = ( errmess ) => ({
	type: ActionTypes.COMMENTS_FAILED,
	payload: errmess
});


export const addComments = (comments) => ({
	type: ActionTypes.ADD_COMMENTS,
	payload: comments
});

export const fetchPromos =() => (dispatch) => {
	dispatch(promosLoading(true));

	return fetch(baseUrl + 'promotions')
	    .then(response => response.json())
	    .then(promos => dispatch(addPromos(promos)));
	

} 

export const promosLoading = ( ) => ({
	type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = ( errmess ) => ({
	type: ActionTypes.PROMOS_FAILED,
	payload: errmess
});


export const addPromos = (promos) => ({
	type: ActionTypes.ADD_PROMOS,
	payload: promos
});