module.exports = (app) => {
  app.use("/api/v1/conference", require("./conference")); //Conference routes
};
