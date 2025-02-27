import * as Joi from "joi";

export default {
  type: "object",
  properties: {},
} as const;

export const createPostFunctionSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

export const getPostsByIdFunctionSchema = Joi.object({
  id: Joi.number().integer().required(),
});

export const updatePostFunctionSchema = Joi.object({
  id: Joi.number().integer().required(),
  title: Joi.string().optional().allow(null).allow(""), // optional
  content: Joi.string().optional().allow(null).allow(""), // optional
});

export const delPostFunctionSchema = Joi.object({
  id: Joi.number().integer().required(),
});