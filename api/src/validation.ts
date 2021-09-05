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