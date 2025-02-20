import * as Joi from "joi";
import { title } from "process";

export default {
  type: "object",
  properties: {},
} as const;

export const createCommentFunctionSchema = Joi.object({
  postId: Joi.number().integer().required(),
  content: Joi.string().required(),
});

export const getAllCommentsForPostFunctionSchema = Joi.object({
  postId: Joi.number().integer().required(),
});

export const updateCommentFunctionSchema = Joi.object({
  id: Joi.number().integer().required(),
  // userId: Joi.number().integer().required(),
  // postId: Joi.number().integer().required(),
  content: Joi.string().required(),
});

export const delCommentFunctionSchema = Joi.object({
  id: Joi.number().integer().required(),
  userId: Joi.number().integer().required(),
  postId: Joi.number().integer().required(),
});

// export const updatePostFunctionSchema = Joi.object({
//   id: Joi.number().integer().required(),
//   userId: Joi.number().integer().required(),
//   title: Joi.string().optional().allow(null).allow(""), // optional
//   content: Joi.string().optional().allow(null).allow(""), // optional
// });

// export const delPostFunctionSchema = Joi.object({
//   id: Joi.number().integer().required(),
//   userId: Joi.number().integer().required(),
// });