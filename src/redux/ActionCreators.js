import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
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

	setTimeout(() => {
		dispatch(addDishes(DISHES));
	}, 2000);
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




