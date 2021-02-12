function validateAction(req, res, next) {
  if (!req.body.project_id || !req.body.description || !req.body.notes) {
    res.status(400).json({
      message: 'Your request must include notes, id, description'
    })
  } else {
    next();
  }
}

function validateProject(req, res, next) {
  if (!req.body.name || !req.body.description) {
    res.status(400).json({ message: "Your request must include a name and description" })
  } else {
    next();
  }
}

module.exports = {
  validateAction,
  validateProject
}