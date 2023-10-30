const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||"mongodb+srv://etbjgvdl:9w7xtpB9Hwf967nT@cluster0.wlrqez9.mongodb.net/cluster0",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
