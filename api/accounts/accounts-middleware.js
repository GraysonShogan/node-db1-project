const yup = require("yup");
const Account = require("./accounts-model");

exports.checkAccountPayload = (req, res, next) => {
  const accountSchema = yup.object().shape({
    name: yup.string().required().trim().min(3).max(100),
    budget: yup.number().required().positive().max(1000000),
  });

  try {
    accountSchema.validateSync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
};
