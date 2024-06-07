const cors = require('cors')
const express = require('express')

const usersRouter = require('./router/users.router')
const authRouter = require('./router/auth.router')
const postsRouter = require('./router/posts.router')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', usersRouter)
app.use('/auth', authRouter)
app.use('/posts', postsRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'API POSTS V1.0.0'
  })
})

module.exports = app
