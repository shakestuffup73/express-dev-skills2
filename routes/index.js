import { Router } from 'express'

const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express Skills' })
})

// render always looks in views folder
//unless landing page was going to have edit/post/delete etc. capabilities, it doesn't need it's own controller
// because this is just a landing page with view links that will render views based on those routes, it's not necessary

export { 
  router
}
