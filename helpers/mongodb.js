require('dotenv').config();

module.exports = function mongodb() {
  const mongoURL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@wdpcluster-ebucw.mongodb.net/dailytodoDB`;

  return mongoURL;
}
