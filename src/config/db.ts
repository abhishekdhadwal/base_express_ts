import mongoose from 'mongoose';
import mongo from './mongo.json';

const connect_to_db = async() => {

      let fetch_url = mongo.mongoDb.URI
      let options = {
            useNewUrlParser : true, 
            useUnifiedTopology : true, 
            useFindAndModify : false
      }

      mongoose.connect(fetch_url, options);
      mongoose.connection.on("connected", (data) => {
          console.log("connected to MongoDb");
      });
      mongoose.connection.on("error", (error) => {
          console.log(error);
      });

}

export default connect_to_db;