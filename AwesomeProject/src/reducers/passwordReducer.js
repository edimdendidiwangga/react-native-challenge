const initialState = {
	data : []
}

const fetchPassword = (state, data) => {
	let newState = {...state, data}
	return newState
}

const addPassword = (state, data) => {
  let newState = {
	 	...state,
		data: [...state.data, data]
  }
	return newState
}

const editPassword = (state, updated) => {
	let newData = state.data.map(password => password.id === updated.id ? updated : password)
	let newState = {
	 	...state,
		data: newData
  }
	return newState
}

const getById = (state, title) => {
	let newData = state.data.filter(data => data.title == title)
	let newState = {
	 	...state,
		data: newData
  }
	return newState
}

const deletePassword = (state, data) => {
	let newData = state.data.filter(data => data.id != id)
	let newState = {
	 	...state,
		data: newData
  }
	return newState
}

const passwordReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_PASSWORD': return fetchPassword(state, payload)
		case 'ADD_PASSWORD': return addPassword(state, payload)
		case 'EDIT_PASSWORD': return editPassword(state, payload)
		case 'GET_BY_ID': return getById(state, payload)
		case 'DELETE_PASSWORD': return deletePassword(state, payload)
			break;
		default: return state
	}
	return {
		data: []
	}
}

export default passwordReducer
