const Joi = require('joi');

const loginValidation = (req, cb) => {
  const schema = Joi.object({
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    email: Joi.string().email().required(),
  });
  schema.validateAsync(req.body).then(() => {
    cb({ success: true });
  }).catch((error) => {
    cb({ success: false, message: error.message });
  });
};

module.exports = loginValidation;
