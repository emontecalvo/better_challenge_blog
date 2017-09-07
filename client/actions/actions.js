export const start_new_blog = () => ({
	type: 'START_NEW_BLOG'
})

export const cancel_blog = () => ({
	type: 'CANCEL_BLOG'
})

export const cancel_edit = () => ({
	type: 'CANCEL_EDIT'
})

export const add_blog = (title, content) => ({
	type: 'ADD_BLOG',
	title,
	content
})

export const edit_blog_start = blog => ({
	type: 'EDIT_BLOG_START',
	blog
})

export const edit_the_blog = blog => ({
	type: 'EDIT_THE_BLOG',
	blog
})


export const remove_blog_post = blog => ({
	type: 'REMOVE_BLOG_POST',
	blog
})

