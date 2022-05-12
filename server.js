const express = require('express')
const server = express();
const port = 8080;

server.use(express.json());
server.use("/msm/api/users", require('./router/users'))

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})