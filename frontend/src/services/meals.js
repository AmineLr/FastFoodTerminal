import http from '../http-common'

class MealsDataService{
	getAll(){
		return http.get('/meals')
	}
}

export default new MealsDataService