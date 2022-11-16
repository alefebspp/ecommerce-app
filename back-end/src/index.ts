import express from 'express';
import cors from 'cors';
import connectToMongoDB from './database';
import routes from './routes/routes';

const app = express();
app.use(cors());
connectToMongoDB();
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send('Olá mundo');
});

app.listen(process.env.PORT || 3000, () => console.log('Connected!'));
