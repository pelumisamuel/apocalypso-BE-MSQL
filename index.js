import express from 'express'
import Joi from 'joi'
import bcrypt from 'bcryptjs'
import { joiPassword } from 'joi-password'
import generateToken from './Utils/generateToken.js'
import pool from './config/db.js'
// import movieRoutes from './Routes/movieRoutes.js'
import userRoutes from './Routes/userRoutes.js'

// initiallise express server
const app = express()
app.use(express.json())

//use Routes
// app.use('/api/movies', movieRoutes)
app.use('/api/users', userRoutes)

// DATABASE SETTINGS

// VALIDATIONS

function validateUsers(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(3).required(),
    password: joiPassword
      .string()
      .minOfSpecialCharacters(1)
      .minOfLowercase(1)
      .minOfUppercase(1)
      .minOfNumeric(1)
      .noWhiteSpaces()
      .required(),
  })
  return schema.validate(user)
}

// // hash password from bcrpyt
// const hashPassword = async (userPassword) => {
//   const convertedUserPassword = userPassword.toString()
//   const harshPassword = await bcrypt.hash(convertedUserPassword, 10)
//   return harshPassword
// }
// // comapare password function from bcrypt
// const matchPassword = async (newPassword, existingHashedPassword) => {
//   return await bcrypt.compare(newPassword, existingHashedPassword)
// }
// //LOGIN USER
// app.post('/api/users/login', async (req, res) => {
//   const { email, password } = req.body

//   let user = await pool.query('select * from customer where email=?', [email])
//   user = user[0][0]

//   if (user && (await matchPassword(password, user.password))) {
//     res.status(200)

//     //if passed login in

//     res.json({
//       id: user.id,
//       name: user.name,
//       isAdmin: user.admin,
//       token: generateToken(user.id),
//     })
//   } else {
//     res.status(401).send('email or username is invalid')
//   }
// })

// ALL USERS
app.get('/api/users', async (req, res) => {
  const allUsers = await pool.query('SELECT * FROM customer')
  //   res.json({ test: 'loh' })
  console.log(allUsers[0])
  res.json(allUsers[0])
})

// /// Register Users
// app.post('/api/users', async (req, res) => {
//   const { error } = validateUsers(req.body)
//   if (error) return res.status(400).send({ error: error.details[0].message })
//   const { name, email, password } = req.body
//   try {
//     const harshedPassword = await hashPassword(password)
//     const userExist = await pool.query(
//       'select email from customer where email=?',
//       [email]
//     )
//     if (userExist[0].length > 0) {
//       res.status(400).send('User already exist')
//     } else {
//       const result = await pool.query(
//         'INSERT into customer SET name=?, email=?, password=?',
//         [name, email, harshedPassword]
//       )
//       console.log(result)

//       res.send({
//         name,
//         email,
//         id: result[0].insertId,
//       })
//     }
//   } catch (error) {
//     console.log(error)
//     res.status(500).send(error)
//   }
// })

//adding movies

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Listening on port ${port}...`))
