import { skills } from '../data/skills.js'
import { router } from '../routes/skills.js'

function index(req, res) {
  res.render('skills/index', {
    skills: skills
  })
}

function newSkill (req, res) {
  res.render('skills/new')
}

function create (req, res) {
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
