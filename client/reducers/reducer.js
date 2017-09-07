
const initialState = {
	BlogStart: false,
	BlogList: [],
	showEdit: false,
	blogToEdit: ''
}
	
const reducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);

	if (action.type === 'START_NEW_BLOG') {
		state.BlogStart = true;
		return {...state}
	}

	if (action.type === 'CANCEL_BLOG') {
		state.BlogStart = false;
		return {...state}
	}

	if (action.type === 'CANCEL_EDIT') {
		state.showEdit = false;
		return {...state}
	}

	if (action.type === 'ADD_BLOG') {
		let subList = [];

		for (let i = 0; i < state.BlogList.length; i++) {
			subList.push(state.BlogList[i]);
		}

		let title = action.title;
		let content = action.content;
		subList.unshift([title, content]);

		state.BlogStart = false;

		return {...state, BlogList: subList}
	}

	if (action.type === 'REMOVE_BLOG_POST') {
		let subblog2 = []

		for (let i = 0; i < state.BlogList.length; i++) {
			if (action.blog != state.BlogList[i]) {
				subblog2.push(state.BlogList[i]);
			}
		}

		return {...state, BlogList: subblog2}
	}

	if (action.type === 'EDIT_BLOG_START') {
		return {...state, BlogList: state.BlogList, showEdit: true, blogToEdit: action.blog}
	}

	if (action.type === 'EDIT_THE_BLOG') {
		let subblog3 = []

		for (let i = 0; i < state.BlogList.length; i++) {
			if (action.blog != state.BlogList[i]) {
				subblog3.push(state.BlogList[i]);
			} else {
				subblog3.push(action.blog);
			}
		}
		
		return {...state, BlogList: subblog3, showEdit: false}
	}

	return state;
}

exports.reducer = reducer;

