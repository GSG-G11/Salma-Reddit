const Joi = require('joi');

const signupValidation = (req, cb) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    email: Joi.string().email().required(),
    image: Joi.string().domain(),
  });
  schema.validateAsync(req.body).then(() => {
    cb({ success: true });
  }).catch((error) => {
    cb({ success: false, message: error.message });
  });
};

module.exports = signupValidation;
