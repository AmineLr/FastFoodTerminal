import app from './server.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (err) throw err
		console.log('DB connected')

		app.listen(
			process.env.PORT,
			() => {
				console.log(`Server on http://localhost:${process.env.PORT}`)
			}
		)
	}
)