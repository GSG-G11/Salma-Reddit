const Joi = require('joi');

const loginValidation = (req) => {
  const schema = Joi.object({
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    email: Joi.string().email().required(),
  });
  return schema.validateAsync(req.body)
    .then((success) => success)
    .catch((error) => error);
};

module.exports = loginValidation;
