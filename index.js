const app = require('express')()
const bodyParser = require('body-parser')
const blogRouter = require('./src/routers/blog')
const projectRouter = require('./src/routers/project')
const teamRouter = require('./src/routers/team')
const usersRouter = require('./src/routers/users')


const port = 3000


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/posts', blogRouter)
app.use('/projects', projectRouter)
app.use('/team', teamRouter)
app.use('/users', usersRouter)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))