const router = require('express').Router
const userService = require('../users/service/userService')

router.get("/", async function (req, res) {
  const response = await userService.getUser(req)
  if(response.data) {
    res.status(200).json(response)
  } else {
    res.status(400)
  }
})

router.post("/create", async function (req, res) {
  const response = await userService.createUser(req)
  if(response.data){
    res.status(200)
  } else {
    res.status(400)
  }
})


module.exports = router