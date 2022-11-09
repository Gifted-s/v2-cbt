const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const morgan = require('morgan')
const Question = require('./models/Question')
const mongoose = require('mongoose');
const User = require('./models/Users')
mongoose.connect('mongodb://127.0.0.1:27017/merit', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Mongodb connected')
});
const user_data = [

]
const app = express()

app.use(morgan('combined'))
app.use(fileUpload())
app.listen(3001, () => {
  console.log('server listen at port 3001')
})
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cors())
let config = {}



app.post('/post', (req, res) => {
  if (!req.files) {
    return res.status(400).send({ message: "no file was sent.....error" })
  }
  const file = req.files.file
  file.mv(`${__dirname}/client2/public/images/${file.name}`).then(err => {
    if (err) {
      console.log(err)
      return res.status(500).send({ error: 'There was an internal error' })
    }
    else {
      console.log('done')
      return res.json({ fileName: file.name, filePath: `/images/${file.name}` })
    }

  })
})
app.post('/add', (req, res) => {
  const newQuestion = new Question({ ...req.body })
  newQuestion.save((err, result) => {
    if (err) {
      throw err
    }
    res.status(200).send({ message: 'Question ' + " added" })
    console.log(result)
  })


})

app.get('/questions', (req, res) => {
  const query = Question.find({ course: config.course })
  const queries = query.exec()
  queries.then(questions => {
    res.send({
      questions: questions
    })
  })
    .catch(err => {
      console.log(err.message)
    })

})

//call this endpoint whenever you want to setup database from scratch
app.get('/setup-database', (req, res) => {
  let newUserType = new User({
    usertype: 'writters',
    users: []
  })
  newUserType.save().then((newUserType) => {
    res.status(200).send(newUserType)
  })
    .catch(err => {
      res.status(400).send({ error: err.message })
    })

})

//call this endpoint whenever you want to setup an exam or test
app.post('/setup', (req, res) => {
  config = {
    time: req.body.time,
    course: req.body.course
  }
  console.log(config)
  User.updateOne({ usertype: 'writters' }, { $set: { users: [] } }, (err, result) => {
    if (err) {
      throw err
    }
    console.log(result)
    res.status(200).send({ set_complete: true })
  })

})
app.get('/config', (req, res) => {
  res.status(200).send({ config })
})
app.post('/submit', (req, res) => {
  const user_obj =
  {
    name: req.body.name.toUpperCase(),
    matric_number: req.body.matric_number,
    score: req.body.score,
    course: req.body.course,
    time_completed: req.body.time_completed

  }
  user_data.push(user_obj)
  User.updateOne({ usertype: 'writters' }, { $set: { users: user_data } }).then((result) => {
    console.log(result)
  })


})

app.get('/dash', (req, res) => {
  res.send({ user_data })

})

app.get('/', (req, res, next) => {
  res.status(200).send({ welcome: 'welcome guy' })
})
