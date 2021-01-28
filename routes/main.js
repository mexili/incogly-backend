module.exports = (app) => {
  app.use("/api/v1/ping", require("./ping")); //Test routes
  app.use("/api/v1/conference", require("./conference")); //Conference routes
};
