import * as Joi from "joi";

export default {
  type: "object",
  properties: {},
} as const;

export const registerFunctionSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required()
});   

export const loginFunctionSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
});   