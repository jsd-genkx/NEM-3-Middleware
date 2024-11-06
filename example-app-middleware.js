import express from 'express';
const app = express()
const port = 3000

// Theory

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

app.use('/user/:id', (req, res, next) => {
  console.log('Request Type 0:', req.method)
  next()
})

app.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

app.get('/user/:id', (req, res, next) => {
  res.send('USER')
})

// Real life

function logOriginalUrl (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}

function logMethod (req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

app.get('/user/:id', [logOriginalUrl, logMethod], (req, res, next) => {
  res.send('User Info')
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});