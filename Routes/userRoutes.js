import { Router } from 'express'
import { LogIn, registerUser } from '../Controllers/usersController.js'

const router = Router()

router.post('/login', LogIn)

router.post('/register', registerUser)

export default router
