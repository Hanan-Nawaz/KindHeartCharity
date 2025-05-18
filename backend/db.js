require('dotenv').config();
const mongoose = require ('mongoose');

main().catch(err => console.log(err));
async function connectToMongo()
{
  const db_status = await mongoose.connect(process.env.MONGO_URI);
  if(db_status){
      console.log("DB connected");
  }
  else{
      console.log("DB not connected");
  }
}
async function main() {
  connectToMongo();
}

module.exports = connectToMongo;




