
import * as DAO from "../DAO";
import * as Models from '../models';
import { error } from '../config/index';
import { app_constant } from '../config/index';

const jwt = require("jsonwebtoken");
const options = { algorithm : "HS256" };
const admin_seckret_key = app_constant.seckret_keys.admin_seckret_key;


// STEP 1 : GENERATE TOKEN
const generate_token = (token_data : any) => {

      return new Promise((resolve, reject) => {
            try {

                  let seckret_key = null;
                  if(token_data.scope == "admin") { seckret_key = admin_seckret_key }

                  const token = jwt.sign(token_data, seckret_key, options)
                  return resolve(token);

            }
            catch(err) {
                  throw reject(err);
            }
      })

}

// STEP 2 : VERIFY TOKEN
const verify_token = async (token : string, type : string) => {
      try {

            let decoded = null;

            if(type == "admin") { decoded = jwt.verify(token, admin_seckret_key) }

            let query : any = { 
                  _id : decoded._id, 
                  accessToken : { $ne : null },
                  tokenGenAt : decoded.tokenGenAt
            }
            let projection = { __v : 0 }
            let options = { lean : true }
            let fetch_data : any = {}
      
            if(decoded.scope == "admin") {
                  fetch_data = await DAO.get_data(Models.Admin, query, projection, options)
            }
      
            if(fetch_data.length) { return fetch_data[0] }
            else { throw error.unauthorized }

      }
      catch(err) {
            throw err;
      }

}



export {
      generate_token,
      verify_token
}