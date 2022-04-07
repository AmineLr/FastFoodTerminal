import express from 'express'
import Category from '../models/categories.js'

const router = express.Router()

router.get('/', async (req, res) => {
	try{
		const datas = await Category.find().sort({position: 1})
		res.status(200).json(datas)
	}catch(err){
		res.status(500).json({message:err})
	}
})


router.post('/', async (req, res) => {

	

	const data = new Category({
		name: req.body.name,
		urlimg: req.body.urlimg,
		position: req.body.position,
	})

	try{
		const savedData = await data.save()
		res.status(200).json(savedData)
	} catch(err) {
		res.status(500).json({message:err})
	}
})


export default router