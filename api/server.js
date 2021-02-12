const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const path = require("path")

const actionsRouter = require('./actions/actions-router')
const projectsRouter = require('./projects/projects-router')

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.static(path.join(__dirname,'client/build')))

server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectsRouter)

server.use('/api/*',(_,res)=>{
  res.json({data: 'Yay Sprint 1!!!!'})
})

server.use('*', (_,res)=>{
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

// OTHER ENDPOINTS
server.get('/', (req, res) => {
    res.send(`
      <h2>Tara's Sprint 1 Challenge</h>
      <p>Welcome to Tara's first Unit 4 Sprint Challenge</p>
    `);
  });

module.exports = server;
