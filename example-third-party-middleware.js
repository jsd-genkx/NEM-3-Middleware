import express from 'express';
import cors from 'cors';

const app = express();
const port = 9400;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/why-do-we-have-express-json', (req, res, next) => {
  const { body } = req;
  res.send(`JSON as req.body=${JSON.stringify(body)}`);
})

app.post('/why-do-we-have-urlencoded', (req, res, next) => {
  const { body } = req;
  res.send(`FROM_DATA as req.query=${JSON.stringify(body)}`);
})

app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
})
