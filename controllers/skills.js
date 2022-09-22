// Import the model that we exported in the Todo.js model file
import { Skill } from '../models/skill.js'

// This ^^ takes the place of the import we were using previously (see below), so we can delete it!
// import { skills } from '../data/skills.js'

import { router } from '../routes/skills.js'

// now refactor the index controller function!
function index(req, res) {
  Skill.find({})
    .then(skills => { // skills represents the result of the query, in this case ALL skills
      res.render('skills/index', {
        skills: skills,
      })
    })
    .catch(error => { // If there's an error, console.log it and redirect back home!
      console.log(error)
      res.redirect('/')
    })
}

// this is the old index controller function...we've refactored it above after connecting to mongoose
// function index(req, res) {
//   res.render('skills/index', {
//     skills: skills
//   })
// }

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  Skill.create(req.body) // req.body is looking inside new.ejs
    .then(skill => {
      res.redirect('/skills')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
}


export {
  index,
  newSkill as new,
  create,
}
