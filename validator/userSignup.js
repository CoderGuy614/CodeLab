const { body, validationResult } = require("express-validator");

// exports.userSignupValidator = (req, res, next) => {
//   const { check, validationResult } = require("express-validator");
//   req.check("name", "Name is required").notEmpty();
//   req.check("email", "Email is required").isEmail();
//   req.check("password", "Password is required").notEmpty();
//   req
//     .check("password")
//     .isLength({ min: 6 })
//     .withMessage("Password must be at least 6 characters");

//   const errors = req.validationErrors();
//   if (errors) {
//     const firstErrorMessage = errors[0].message;
//     return res.status(400).json({ error: firstErrorMessage });
//   }
//   next();
// };

const userSignupValidator = () => {
  return [body("name").notEmpty(), body("password").isLength({ min: 5 })];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  userSignupValidator,
  validate,
};
