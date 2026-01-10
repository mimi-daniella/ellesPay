import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
    .required(),
  password: Joi.string()
    .min(8)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
});

export const loginSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 , tlds: { allow: ["com", "net", "org"] }}).required(),
    password: Joi.string().required()
})