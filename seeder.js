import pool from './config/db.js'
import movies from './movie.js'

const importData = async () => {
  try {
    const date = new Date()
    // let x = b
    // console.log(x)
    const samplemovie = movies.map(async (x) => {
      //await setTimeout(() => {}, 5000)
      await pool.query(
        'INSERT into movie SET id=?, title=?, image=?, genre=?, starring=?, price=?, duration=?, rating=?, description=?, trailer=?, availableTicket=?, created=?',
        [
          x.id,
          x.title,
          x.image,
          x.genre,
          x.starring,
          x.price,
          x.duration,
          x.rating,
          x.description,
          x.trailer,
          x.availableTicket,
          date,
        ]
      )
    })
    // console.log(samplemovie)
    const send = await Promise.all(samplemovie)
    console.log(send)
    console.log('data imported')
    process.exit(1)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

importData()
