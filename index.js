const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const path = require("path")

const actionsRouter = require('./api/actions/actions-router')

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build")))

app.use('/api/actions', actionsRouter)

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}!`)
})

/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just hack it…
I need this code, but don't know where, perhaps should make some middleware, don't worry, just hack it

Go code!
*/
