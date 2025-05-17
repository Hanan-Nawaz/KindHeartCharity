require('dotenv').config();
const mongoose = require ('mongoose');

main().catch(err => console.log(err));
async function connectToMongo()
{
  await mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true
});

}
async function main() {
  connectToMongo();
}

module.exports = connectToMongo;




