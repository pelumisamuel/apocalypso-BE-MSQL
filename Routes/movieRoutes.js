import { Router } from 'express'

const router = Router()

// get all currently showing movies
router.get('/', getMovies)

router.get('/:id', getMovieID)

export default router
