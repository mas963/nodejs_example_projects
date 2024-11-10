import express, {urlencoded, json} from 'express';
import notesRouter from "./routes/notes";
import {notFound} from "./middleware/not-found";
import {error} from "./middleware/error";

const app = express();
app.use(urlencoded({extended: true}));
app.use(json());

app.use('/api', notesRouter);

app.use(notFound);
app.use(error);

export default app;