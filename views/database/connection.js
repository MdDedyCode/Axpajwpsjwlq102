const mongoose = require('mongoose');
const connectDB = async () => {
  try {    
    mongoose.set('strictQuery', false); 
    mongoose.connect("mongodb+srv://mdcodewebsite:mdcodewebsite@atlascluster.rxwo2px.mongodb.net/?retryWrites=true&w=majority", { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      poolSize: 50,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000, 
      family: 4 
    });
  } catch (err) {
    console.log(`[ ERROR ] Db: ${err.message}`);
    process.exit(1);
  }
};
connectDB()