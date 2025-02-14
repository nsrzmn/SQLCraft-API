import * as Joi from "joi";

export default {
  type: "object",
  properties: {},
} as const;

export const getAllUsersFunctionSchema = Joi.object({
  id: Joi.number().required()
});   