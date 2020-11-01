import * as ActionTypes from './ActionTypes';

export const Promotions= (state={
	isLoading:true,
	errmsg:null,
	promotions:[]
}, action) => {
	switch(action.type){
		case ActionTypes.ADD_PROMOS:
			return {...state, isLoading:false, errmsg: null, promotions: action.payload} ;
		case ActionTypes.PROMOS_LOADING:
			return {...state, isLoading:true, errmsg: null, promotions: []} ;
			//this is spread operator, creates a new object, makes changes to it--
		case ActionTypes.PROMOS_FAILED:
			return {...state, isLoading:false, errmsg: action.payload, promotions: []} ;
		default: 
			return state;
	}
}