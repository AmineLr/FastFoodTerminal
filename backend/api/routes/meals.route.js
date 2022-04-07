import express from 'express'
import Meal from '../models/meal.js'

const router = express.Router()

router.get('/', async (req, res) => {
	try{
		const datas = await Meal.find()
		res.status(200).json(datas)
	}catch(err){
		res.status(500).json({message:err})
	}
})

router.post('/', async (req, res) => {

	const data = new Meal({
		
		name: req.body.name,
		urlimg: req.body.urlimg,
		price: req.body.price,
		categorieId: req.body.categorieId,
		description: req.body.description,
		ingredients: req.body.ingredients,
		quantity: req.body.quantity,
	})

	try{
		const savedData = await data.save()
		res.status(200).json(savedData)
	} catch(err) {
		res.status(500).json({message:err})
	}
})


export default router

