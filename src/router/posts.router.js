const postsUseCase = require('../usecases/posts.usecase')
const auth = require('../middlewares/auth.middleware')
const express = require('express')
const router = express.Router()

router.post('/', auth, async (req, res) => {
  try {
    const post = req.body
    const newPost = await postsUseCase.create(post)
    res.json({
      success: true,
      message: 'Post created',
      data: {
        post: newPost
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const posts = await postsUseCase.getAll()
    res.json({
      success: true,
      message: 'Posts found',
      data: {
        posts
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.patch('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params
    const post = req.body
    const updatedPost = await postsUseCase.updateById(id, post)
    res.json({
      success: true,
      message: 'Post updated',
      data: {
        post: updatedPost
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params
    const deletedPost = await postsUseCase.deleteById(id)
    res.json({
      success: true,
      message: 'Post deleted',
      data: {
        post: deletedPost
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router