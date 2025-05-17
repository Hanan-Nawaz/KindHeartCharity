require('dotenv').config();
const mongoose = require ('mongoose');

main().catch(err => console.log(err));
async function connectToMongo()
{
  await mongoose.connect(process.env.MONGO_URI);
console.log("DB connected");
}
async function main() {
  connectToMongo();
}

module.exports = connectToMongo;




