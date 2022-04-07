import mongoose from "mongoose"


const CategorySchema = mongoose.Schema({
	name : {
		type: String,
		required: true
	},
	urlimg : String,
	position: Number
})

export default mongoose.model('categories', CategorySchema)