import axios from 'axios'


export const fetchArticles = () => {
	return dispatch =>
		axios.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=8f3ef4123b884857b17e951ae16e4142')
		.then(function (response) {
				return dispatch({ // next
					type: 'FETCH_ARTICLES',
					payload: response.data.articles
				})
		})
		.catch(error => {
			console.log(error)
		})
}
