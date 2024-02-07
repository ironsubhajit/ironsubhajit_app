const joi = require("@hapi/joi");

const registerValidation = (data) => {
  // validate register request data
  const schema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
    role: joi.number().required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  // validate login request data
  const schema = joi.object({
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const studentLoginValidation = (data) => {
  // validate login request data
  const schema = joi.object({
    roll: joi.required(),
    date_of_birth: joi.date().required(),
  });

  return schema.validate(data);
};



module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.studentLoginValidation = studentLoginValidation;