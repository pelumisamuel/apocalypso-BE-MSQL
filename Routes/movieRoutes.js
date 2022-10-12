import { Router } from 'express'

import {
  getMovieID,
  getMovies,
  latestMovie,
} from '../Controllers/moviesController.js'

const router = Router()

// get all currently showing movies
router.get('/', getMovies)

router.get('/latest', latestMovie)

router.get('/:id', getMovieID)

export default router
