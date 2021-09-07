import { celebrate, SchemaOptions, Segments, Joi } from "celebrate";

const email = Joi.string().email().required();
const name =Joi.string().required();
const password = Joi.string().max(256).required(); // TODO password strength

export const validate = (schema: SchemaOptions) =>
  celebrate(schema, {
    abortEarly: false,
  });

export const loginSchema = {
  [Segments.BODY]: Joi.object().keys({
    email,
    password,
  }),
};

export const registerSchema = {
  [Segments.BODY]: Joi.object().keys({
    email,
    password,
    name,
  })
};

export const verifyEmailSchema = {
  [Segments.QUERY]: {
    id: Joi.number().positive().required(),
    expires: Joi.date().timestamp().raw().required(),
    signature: Joi.string().length(64).required(),
  },
};

export const resendEmailSchema = {
  [Segments.BODY]: Joi.object().keys({
    email,
  }),
};