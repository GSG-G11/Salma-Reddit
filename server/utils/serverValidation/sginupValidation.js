const Joi = require('joi');

const signupValidation = (req) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    email: Joi.string().email().required(),
    image: Joi.string().domain(),
  });
  return schema.validateAsync(req.body).then((success) => success).catch((error) => error);
};

module.exports = signupValidation;
