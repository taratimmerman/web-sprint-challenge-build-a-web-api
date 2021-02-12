function validateAction(req, res, next) {
    if (!req.body) {
        res.status(400).json({ message: "Missing action data" })
    } else {
        if (!req.body.description) {
            res.status(400).json({ message: "Missing required description field" })
        } else {
            next();
        }
    }
}

function validateProject(req, res, next) {
    if (!req.body) {
        res.status(400).json({ message: "Missing project data" })
    } else {
        if (!req.body.description) {
            res.status(400).json({ message: "Missing required name field" })
        } else {
            next();
        }
    }
}

module.exports = {
    validateAction,
    validateProject
  }