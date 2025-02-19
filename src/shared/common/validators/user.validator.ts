import * as Joi from "joi";

export default {
  type: "object",
  properties: {},
} as const;

export const getUserByIdFunctionSchema = Joi.object({
  id: Joi.number().required()
});   

export const updateUserByIdFunctionSchema = Joi.object({
  // id: Joi.number().required(),
  username: Joi.string().optional().allow(""),
  email: Joi.string().optional().allow("")
});   

export const deleteUserByIdFunctionSchema = Joi.object({
  id: Joi.number().required()
});   