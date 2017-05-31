const initialState = {
	data : []
}

const fetchArticles = (state, data) => {
	let newState = {...state, data}
	return newState
}


const passwordReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_ARTICLES': return fetchArticles(state, payload)
		break;
		default: return state
	}
	return {
		data: []
	}
}

export default passwordReducer
