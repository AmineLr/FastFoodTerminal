import http from '../http-common'

class CategoriesDataService{
	getAll(){
		return http.get('/categories')
	}
}

export default new CategoriesDataService