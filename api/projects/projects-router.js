// Write your "projects" router here!
const Project = require('./projects-model')
const express = require('express')
const mw = require('../middleware/middleware')

const router = express.Router()

// PROJECTS ENDPOINTS
router.get('/', (req, res) => {
    Project.get(req.query)
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error retrieving the projects'
            })
        })
})

router.get('/:id', (req, res) => {
    Project.get(req.params.id)
        .then(project => {
            if (project) {
                res.status(200).json(project)
            } else {
                res.status(404).json({ message: 'The project with the specified ID does not exist' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: `${err}` })
        })
});

router.post('/', mw.validateProject, (req, res) => {
    Project.insert(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error adding project'
            })
        })
});

router.put('/:id', mw.validateProject, (req, res) => {
    const changes = req.body
    Project.update(req.params.id, changes)
        .then(project => {
            if (project) {
                res.status(200).json(project)
            } else {
                res.status(404).json({ message: 'The project with the specified ID does not exist' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: `${err}` })
        })
})

router.delete('/:id', mw.validateProject, (req, res) => {
    Project.remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: 'The project with the specified ID has been deleted' })
            } else {
                res.status(404).json({ message: 'The project with the specified ID does not exist' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: `${err}` })
        })
})

router.get('/:id/actions', (req, res) => {
    Project.getProjectActions(req.query)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'The actions information could not be retrieved'})
        })
})

module.exports = router;