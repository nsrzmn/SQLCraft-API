import * as Joi from "joi";

export default {
  type: "object",
  properties: {},
} as const;

export const dummyFunctionSchema = Joi.object({
//   id: Joi.number().integer().required(),
//   filters: Joi.object({
//     sortBy: Joi.string().allow(""),
//   })
//     .allow("")
//     .optional(),
});