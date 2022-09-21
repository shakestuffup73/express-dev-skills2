import { Router } from 'express'

// import the controller to have access to its methods

import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET skills listing. */
router.get('/', skillsCtrl.index)


export {
  router
}