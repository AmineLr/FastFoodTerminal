import mongoose from "mongoose"


const MealSchema = mongoose.Schema({
	name : {
		type: String,
		required: true
	},
	urlimg : String,
	price: Number,
	categorieid: String,
	description: String,
	ingredients:String,
	quantity: Number,
	
	
})

export default mongoose.model('meals', MealSchema)