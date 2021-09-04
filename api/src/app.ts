import { errors } from "celebrate";
import express from "express";
import "express-async-errors";
import session from "express-session";
import helmet from "helmet";
import { SESSION_OPTS } from "./config";
import { notFound, serverError } from "./middleware";
import { loginSchema, validate } from "./validation";

const app = express();

app.use(helmet());

app.use(session(SESSION_OPTS));

app.use(express.json());

app.get("/", (req, res) => res.json({}));

app.post("/login", validate(loginSchema), (req, res) => {
  const { email, password } = req.body;

  req.session.userId = 1;

  res.json({ message: "OK" });
});

app.use(notFound);

app.use(errors());

app.use(serverError);

export { app };
