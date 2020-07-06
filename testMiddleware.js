exports.testMiddlewareFunction = (req, res, next) => {
  if (req.body.name) {
    console.log(req.body.name.toUpperCase());
  }
  next();
};
