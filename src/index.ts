import express from 'express';
import errorHandler from './midlewares/error-handler.midlewares';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(statusRoute);
app.use(usersRoute);

app.use(errorHandler);

app.listen(3000, ()=> {
    console.log("Running on port 3000!")
});