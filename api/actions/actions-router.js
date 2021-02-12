// Write your "actions" router here!
const Action = require('./actions-model')
const express = require('express')
const mw = require('../middleware/middleware')

const router = express.Router()

// ACTIONS ENDPOINTS
router.get('/', (req, res) => {
    Action.get(req.query)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'The actions information could not be retrieved'
            })
        })
})

router.get('/:id', (req, res) => {
    Action.get(req.params.id)
        .then(actions => {
            if (actions) {
                res.status(200).json(actions)
            } else {
                res.status(404).json({ message: 'The action with the specified ID does not exist' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: `${err}` })
        })
})

router.post('/', mw.validateAction, (req, res) => {
    Action.insert(req.body)
        .then(actions => {
            res.status(201).json(actions)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error adding Action' })
        })
})

router.put('/:id', mw.validateAction, (req, res) => {
    Action.update(req.params.id, req.body)
        .then((update) => {
            res.status(200).json(update)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error updating Action' })
        })
})

router.delete('/:id', (req, res) => {
    Action.remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: 'The action with the specified ID has been deleted' })
            } else {
                res.status(404).json({ message: 'The action with the specified ID does not exist' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: `${err}` })
        })
})

module.exports = router;