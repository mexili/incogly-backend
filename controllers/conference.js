const joinCall = (req, res) => {
  console.log("Joining...");
  res.send("Connected");
};

module.exports = {
  joinCall,
};
