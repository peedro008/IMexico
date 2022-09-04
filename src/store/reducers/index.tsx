import { combineReducers } from 'redux'

import propertyReducer from './property.reducer'
import countryReducer from './country.reducer'
import propertyTypeReducer from './propertyType.reducer'
import agentReducer from './agent.reducer'
import stateReducer from './state.reducer'
import locationReducer from './location.reducer'
import countryItemReducer from './countryItem.reducer'
import propertyTagReducer from './propertyTag.reducer'
import loginReducer from './login.reducer'
import registerReducer from './register.reducer'
import requestResetReducer from './requestReset.reducer'
import resetReducer from './reset.reducer'

import propertyDetailsReducer from './propertyDetails.reducer'
import applyReducer from './apply.reducer'
import phonecallReducer from './phonecall.reducer'
import newsletterReducer from './newsletter.reducer'
import postReducer from './post.reducer'
import authorReducer from './author.reducer'
import commentReducer from './comment.reducer'
import categoryReducer from './category.reducer'
import likeReducer from './like.reducer'
import relatedPostsReducer from './relatedPosts.reducer'
import featureReducer from './feature.reducer'
import configurationReducer from './configuration.reducer'
import userReducer from './user.reducer'
import developmentReducer from './development.reducer'

import eventReducer from './event.reducer'

import subagentReducer from './subagent.reducer'

import satisfiedCustomersReducer from './satisfiedCustomers.reducer'
import developmentDetailsReducer from './developmentDetails.reducer'
//import newReducer

export default combineReducers({
	propertyReducer,
	countryReducer,
	propertyTypeReducer,
	agentReducer,
	stateReducer,
	locationReducer,
	countryItemReducer,
	propertyTagReducer,
	loginReducer,
	registerReducer,
	requestResetReducer,
	resetReducer,
	propertyDetailsReducer,
	applyReducer,
	phonecallReducer,
	newsletterReducer,
	postReducer,
	authorReducer,
	commentReducer,
	categoryReducer,
	likeReducer,
	relatedPostsReducer,
	featureReducer,
	configurationReducer,
	userReducer,
	developmentReducer,

	eventReducer,

	subagentReducer,

	satisfiedCustomersReducer,
	developmentDetailsReducer,
	//newReducer,
})
