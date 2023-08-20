import express from 'express';
import bookRouter from './routers/Book.js';
const app = express();
const PORT = 80;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcomee Guys >>!');
});

app.get("/health",  (req, res) => {
	res.sendStatus(200);
});


app.use('/book', bookRouter);

app.listen(PORT, () => {
    console.log(`App is running and Listening on port ${PORT} `);
});
//# sourceMappingURL=index.js.map