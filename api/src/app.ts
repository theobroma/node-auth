import { errors } from "celebrate";
import express from "express";
import "express-async-errors";
import session from "express-session";
import helmet from "helmet";
import { SESSION_OPTS } from "./config";
import { auth, verify } from "./routes";
import { notFound, serverError } from "./middleware";

const app = express();

app.use(helmet());

app.use(session(SESSION_OPTS));

app.use(express.json());

app.use(
    auth, // login, logout, register
    verify // email verification, resend
  );

app.use(notFound);

app.use(errors());

app.use(serverError);

export { app };
