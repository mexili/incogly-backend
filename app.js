const express = require("express");
const app = express();
const http = require("http");

const middleware = require("./utils/middleware");

// initialisation of the router and the middlewares
app.use(middleware.requestLogger);

require("./routes/main")(app);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

require("./conference")(server);

//ends here

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/peerjs",
});

// enables the peerjs server
app.use("/conference", peerService);

// deployment of the server
if (module === require.main) {
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log("Press Ctrl+C to quit.");
  });
}

module.exports = server;
