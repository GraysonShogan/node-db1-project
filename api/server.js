const express = require("express");
const accountsRouter = require("./accounts/accounts-router");

const app = express();

app.use(express.json());

app.use("/api/accounts", accountsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes
  res.status(500).json({ message: "Something went wrong" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
