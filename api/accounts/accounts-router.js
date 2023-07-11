const router = require("express").Router();
const Accounts = require("./accounts-model");
const {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId,
} = require("./accounts-middleware");

router.get("/", async (req, res, next) => {
  try {
    const accounts = await Accounts.getAll();
    res.json(accounts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", checkAccountId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const account = await Accounts.getById(id);
    res.json(account);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
});

module.exports = router;
