const axios = require('axios')

exports.getUser = async function (req) {
  const username = req.query.username
  const password = req.query.password

  axios.get('/api/v1/user', {
    params: {
      username: username,
      password: password
    }
  })
  .then(function (response) {
    console.log(response)
    return response
  })
  .catch(function (error) {
    console.log(error)
    return error
  })

}

exports.createUser = async function (req) {
  const user = buildUser(req.query)

  axios.post('/api/v1/user', {
    user: user
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function buildUser (fields) {
  const user = {
    name : fields.name,
    status : fields.status,
    profileImageURL : fields.profileImage,
    username : fields.username,
    password : fields.password
  }
  return user
}