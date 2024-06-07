const Posts = require('../models/posts.model')

async function create(postData) {
  const newPost = await Posts.create(postData)
  return newPost
}

async function getAll() {
  const posts = await Posts.find().populate('user')
  return posts
}

async function updateById(id, postData) {
  const post = await Posts.findByIdAndUpdate(id, postData, { new: true })
  return post
}

async function deleteById(id) {
  const post = await Posts.findByIdAndDelete(id)
  return post
}

module.exports = { create, getAll, updateById, deleteById }
