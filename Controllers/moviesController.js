import pool from '../config/db.js'
import asyncHandler from 'express-async-handler'

// gell all currently showing movies controller
const getMovies = asyncHandler(async (req, res) => {
  const allMovies = await pool.query('SELECT * FROM movie')
  res.status(200).json(allMovies[0])
})

// get movie by id controller

const getMovieID = asyncHandler(async (req, res) => {
  const id = req.params.id
  try {
    const movie = await pool.query('SELECT * FROM movie WHERE id=?', [id])

    res.status(200).json(movie[0][0])
  } catch (error) {
    res.status(401).send(error)
  }
})

// get top products

const latestMovie = async (req, res) => {
  const movie = await pool.query(
    'SELECT * FROM movie ORDER BY created DESC limit 3'
  )
  res.json(movie[0])
}

export { getMovies, getMovieID, latestMovie }
