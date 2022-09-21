import { Router } from 'express'

// import the controller to have access to its methods

import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET METHODS ARE THE BASE!
/* GET skills listing (anything under here is GET methods). */
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)

/* POST METHODS */

router.post('/', skillsCtrl.create)


export {
  router
}