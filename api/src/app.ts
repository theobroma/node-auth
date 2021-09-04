import { errors } from "celebrate";
import express from "express";
import "express-async-errors";
import session from "express-session";
import helmet from "helmet";
import { SESSION_OPTS } from "./config";
import { notFound, serverError } from "./middleware";
import { router } from "./routes";

const app = express();

app.use(helmet());

app.use(session(SESSION_OPTS));

app.use(express.json());

app.use(router);

app.use(notFound);

app.use(errors());

app.use(serverError);

export { app };
