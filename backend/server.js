import express from 'express'
import cors from 'cors'
import categories from './api/routes/categories.route.js'
import meals from './api/routes/meals.route.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('assets'));

app.use('/api/v1/categories', categories)
app.use('/api/v1/meals', meals)
app.use('*', (req, res) => res.status(404).json({error:"404 not found"}))

export default app

