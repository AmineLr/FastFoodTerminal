
import './Home.scss'
import './Meals.scss'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import MealsDataService from '../services/meals'
import Card from '../components/Card'

const Meals = () => {
	const [mealsDatas, setMealsDatas] = useState()
	const urlParams = useParams()

	useEffect(() => {
		MealsDataService.getAll()
		.then(res => {
			setMealsDatas(res.data)
		})
		.catch(err => console.log(err))
	}, [])


	if(!mealsDatas) return null

	return (
		<div className="homePage mealsPage">

			<h1>Selectionner un plat : </h1>

			<div className="listeElement">

				{
					mealsDatas.map(meal => {
						if(meal.catid === urlParams.catid){
							return <Card key={meal._id} data={meal} modal={true} />
						}
						
					})
				}
				
			</div>

		</div>
	)
}

export default Meals
