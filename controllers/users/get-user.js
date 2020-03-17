module.exports.getUser = (req, res, next) => {
  const { name, email } = req.user;
  try {
    res.status(200).send({ name, email });
  } catch (err) {
    next(err);
  }
};
